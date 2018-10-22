import _ from 'lodash'
import * as d3 from 'd3'
import datasource from './data.json'
let initChart = () => {
  let elementId = '#chart'
  let svg
  let width = 1280
  let height = 800
  let rootG
  let linkTextContainer = null
  let zoom
  let scale = 1
  let lastX = 0
  let lastY = 0
  let nodeInactiveColor = '#dcecfc'
  let nodeDefaultColor = '#5fabf1'
  let lineActiveColor = 'red'
  let lineDefaultColor = '#ddd'
  let isPartialModel = false

  zoom = d3
    .zoom()
    .scaleExtent([0.5, 2])
    .on('zoom', function () {
      scale = d3.event.transform.k
      lastX = d3.event.transform.x
      lastY = d3.event.transform.y
      rootG.attr(
        'transform',
        'translate(' + lastX + ',' + lastY + ')scale(' + scale + ')'
      )
    })

  d3.select(elementId)
    .select('svg')
    .remove()
  svg = d3
    .select(elementId)
    .append('svg')
    .attr('id', 'chartSVg')
    .attr('width', width)
    .attr('height', height)

  let rect = svg
    .append('rect')
    .attr('class', 'find-relation-masker')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', function () {
      return '#ffffff'
    })
    .on('click', reset)

  rect.call(zoom)
  rootG = svg
    .append('g')
    .attr('id', 'rootG')
    .attr('width', width)
    .attr('height', height)
  rootG
    .append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 0 12 12')
    .attr('markerUnits', 'strokeWidth')
    .attr('refX', 38)
    .attr('refY', 6)
    .attr('markerWidth', 12)
    .attr('markerHeight', 12)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M2,2 L10,6 L2,10 L6,6 L2,2')
    .attr('fill', '#fecad0')

  let graph = datasource

  // var color = d3.schemeAccent

  var radius = d3.scaleSqrt().range([0, 4])

  var simulation = d3
    .forceSimulation()
    .force(
      'link',
      d3
        .forceLink()
        .distance(function (d) {
          // return (
          //   radius(d.source.value / 2 + 20) + radius(d.target.value / 2 + 20)
          // )
          return 150
        })
        .strength(function (d) {
          return 0.75
        })
    )
    .force('charge', d3.forceManyBody().strength(-300))
    .force(
      'collide',
      d3.forceCollide().radius(function (d) {
        return 40
      })
    )
    // .force('x', d3.forceX())
    // .force('y', d3.forceY())
    .force('center', d3.forceCenter(width / 2, height / 2))
  // .velocityDecay(0.8)
  // .alphaDecay(0.1)

  var links = rootG
    .append('g')
    .attr('class', 'links')
    .selectAll('line.links')
    .data(graph.links)

  let linksEnter = links
    .enter()
    .append('line')
    .attr('class', function (d) {
      return `links${d.source}-${d.target}`
    })
    .attr('stroke', function (d) {
      if (d.relation === 1) {
        return '#fecad0'
      } else {
        return '#d0ebfb'
      }
    })
    .attr('fill', 'none')
    .style('stroke-width', '1px')
    .attr('marker-end', 'url(' + location.href + '#arrow)')

  linkTextContainer = links
    .enter()
    .append('g')
    .attr('class', 'lineTextG')

  // linkTextContainer
  //   .append('rect')
  //   .attr('width', function (d) {
  //     return 100
  //   })
  //   .attr('height', 13)
  //   .attr('fill', function () {
  //     return '#ffffff'
  //   })

  linkTextContainer
    .append('text')
    .attr('dy', 10)
    .attr('dx', 2)
    .attr('class', function (d) {
      return `link-text${d.source}-${d.target}`
    })
    .text(function (d) {
      if (d.relation === 1) {
        return '投资'
      } else {
        return '董监高'
      }
    })
    .style('font-size', '12px')

  var node = rootG
    .append('g')
    .attr('class', 'nodes')
    .selectAll('g.nodes')
    .data(graph.nodes)
    .enter()
    .append('g')
    .attr('cursor', 'pointer')
    .on('click', nodeClick)
    .on('mouseover', nodeOver)
    .on('mouseleave', nodeLeave)
    .call(
      d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
      // .on('end', dragended)
    )

  node
    .append('circle')
    .attr('class', function (d) {
      return `nodes${d.id}`
    })
    .attr('r', function (d) {
      // return radius(d.value / 2)
      return radius(60)
    })
    // .attr('class', 'nodes-normal')
    .style('stroke', '#349bef')
    .attr('fill', function (d) {
      return '#5fabf1'
    })

  node
    .append('text')
    .attr('class', function (d) {
      return `text${d.id}`
    })
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .style('fill', '#fff')
    .text(function (d) {
      return d.name
    })

  simulation.nodes(graph.nodes).on('tick', ticked)

  simulation.force('link').links(graph.links)

  for (
    var i = 0,
      n = Math.ceil(
        Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())
      );
    i < n;
    ++i
  ) {
    simulation.tick()
  }
  simulation.force('charge', null)
  simulation.force('collide', null)
  simulation.force('link', null)
  simulation.force('center', null)
  function ticked () {
    linksEnter
      .attr('x1', function (d) {
        return d.source.x
      })
      .attr('y1', function (d) {
        return d.source.y
      })
      .attr('x2', function (d) {
        return d.target.x
      })
      .attr('y2', function (d) {
        return d.target.y
      })

    node.attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')'
    })
    linkTextContainer.attr('transform', function (d) {
      let degree =
        (180 *
          Math.atan((d.target.y - d.source.y) / (d.target.x - d.source.x))) /
        Math.PI
      let positionX = (d.source.x + d.target.x) / 2 - 40 / 2
      let positionY = (d.source.y + d.target.y) / 2 - 6
      return (
        'rotate(' +
        degree +
        ' ' +
        (d.source.x + d.target.x) / 2 +
        ' ' +
        (d.source.y + d.target.y) / 2 +
        ')translate(' +
        positionX +
        ',' +
        positionY +
        ')'
      )
    })
  }

  function dragstarted (d) {
    if (!d.isOperation) {
      // reset()
    } else {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }
  }

  function dragged (d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
    if (isPartialModel) return
    setRelatedNodeStyle(d, nodeDefaultColor)
    setUnRelatedNodeStyle(d, nodeInactiveColor)
    setRelatedLineStyle(d, lineActiveColor)
    setUnRelatedLineStyle(d, lineDefaultColor)
  }

  // function dragended (d) {
  //   if (!d3.event.active) simulation.alphaTarget(0)
  //   d.fx = null
  //   d.fy = null
  // }

  function nodeClick (d) {
    // 修改无关节点的颜色，隐藏节点文本
    // 取消无关line的text
    if (!d.isOperation && isPartialModel) {
      reset()
    } else {
      isPartialModel = true
      setRelatedNodeStyle(d, nodeDefaultColor)
      setUnRelatedNodeStyle(d)
      setRelatedLineStyle(d, lineActiveColor)
      setUnRelatedLineStyle(d, lineDefaultColor)
    }
  }
  function nodeOver (node) {
    if (isPartialModel) return
    setRelatedLineStyle(node, lineActiveColor)
    setUnRelatedLineStyle(node, lineDefaultColor)
  }
  function nodeLeave (node) {
    if (!isPartialModel) setRelatedLineStyle(node, lineDefaultColor)
  }
  function getUnrelatedLinksByNode (node) {
    return graph.links.filter(x => {
      return x.source.id !== node.id && x.target.id !== node.id
    })
  }
  function getRelatedLinksByNode (node) {
    return graph.links.filter(
      x => x.source.id === node.id || x.target.id === node.id
    )
  }

  function setRelatedLineStyle (node, color) {
    let relatedLinks = getRelatedLinksByNode(node)
    relatedLinks.forEach(x => {
      setLinkStyle(x, color)
      d3.select(`line.links${x.source.id}-${x.target.id}`)
        .attr('stroke', color)
        .attr('x1', x.source.x)
        .attr('y1', x.source.y)
        .attr('x2', x.target.x)
        .attr('y2', x.target.y)
    })
  }
  function setLinkStyle (link, color, emptyText) {
    d3.selectAll(`line.links${link.source.id}-${link.target.id}`).attr(
      'stroke',
      color
    )
    d3.selectAll(`text.link-text${link.source.id}-${link.target.id}`).text(
      emptyText ? '' : link.relation === 1 ? '投资' : '董监高'
    )
  }
  function setUnRelatedLineStyle (node, color) {
    let unrelatedLinks = getUnrelatedLinksByNode(node)
    unrelatedLinks.forEach(x => {
      setLinkStyle(x, color, true)
    })
  }
  function resetLineStyle () {
    graph.links.forEach(x => {
      setLinkStyle(x, lineDefaultColor)
    })
  }
  function resetNodeStyle () {
    graph.nodes.forEach(x => {
      x.isOperation = false
      setNodeStyle(x, nodeDefaultColor)
    })
  }

  function setNodeStyle (node, color, emptyText) {
    d3.select(`circle.nodes${node.id}`)
      .attr('fill', color)
      .style('stroke', nodeInactiveColor)
    d3.select(`text.text${node.id}`).text(emptyText ? '' : node.name)
  }
  function setUnRelatedNodeStyle (node) {
    let relatedLinks = getRelatedLinksByNode(node)

    let relatedNodes = []
    relatedLinks.forEach(x => {
      let arr = graph.nodes.filter(y => {
        return y.id === x.source.id || y.id === x.target.id
      })
      relatedNodes = [...relatedNodes, ...arr]
    })
    let unRelatedNodes = []
    graph.nodes.forEach(x => {
      let obj = relatedNodes.find(y => {
        return y.id === x.id
      })
      if (!obj) {
        unRelatedNodes.push(x)
      }
    })
    unRelatedNodes.forEach(x => {
      x.isOperation = false
      setNodeStyle(x, nodeInactiveColor, true)
    })
  }
  function setRelatedNodeStyle (node) {
    graph.nodes.forEach(x => (x.isOperation = false))

    let relatedLinks = getRelatedLinksByNode(node)
    let nodes = []
    relatedLinks.forEach(x => {
      let arr = graph.nodes.filter(y => {
        return y.id === x.source.id || y.id === x.target.id
      })
      nodes = [...nodes, ...arr]
    })
    nodes.forEach(x => {
      x.isOperation = true
      setNodeStyle(x, nodeDefaultColor)
    })
  }
  function reset () {
    isPartialModel = false
    resetNodeStyle()
    resetLineStyle()
  }
}

export default {
  initChart: initChart
}
