import * as d3 from 'd3'
import datasource from './data.json'
let initChart = () => {
  let elementId = '#chart'
  let svg
  let width = 1280
  let height = 800
  let rootG
  d3.select(elementId)
    .select('svg')
    .remove()
  svg = d3
    .select(elementId)
    .append('svg')
    .attr('id', 'chartSVg')
    .attr('width', width)
    .attr('height', height)

  svg
    .append('rect')
    .attr('class', 'find-relation-masker')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', function () {
      return '#ffffff'
    })

  rootG = svg
    .append('g')
    .attr('id', 'rootG')
    .attr('width', width)
    .attr('height', height)

  let graph = datasource

  var color = d3.schemeAccent

  var radius = d3.scaleSqrt().range([0, 4])

  var simulation = d3
    .forceSimulation(graph.nodes)
    .force('charge', d3.forceManyBody().strength(-80))
    .force(
      'link',
      d3
        .forceLink(graph.links)
        .distance(100)
        .strength(1)
    )
    .force(
      'collide',
      d3
        .forceCollide()
        .radius(25)
        .strength(1)
    )

    .force('center', d3.forceCenter(width / 2, height / 2))
  // .stop()
  var links = rootG
    .append('g')
    .attr('class', 'links')
    .selectAll('line.links')
    .data(graph.links)

  var nodes = rootG
    .append('g')
    .attr('class', 'nodes')
    .selectAll('g.nodes')
    .data(graph.nodes)
  // d3.timeout(function () {
  function draw () {
    for (
      var i = 0,
        n = Math.ceil(
          Math.log(simulation.alphaMin()) /
            Math.log(1 - simulation.alphaDecay())
        );
      i < n;
      ++i
    ) {
      simulation.tick()
    }

    links
      .enter()
      .append('line')
      .attr('class', 'links')
      .attr('stroke', '#ddd')
      .attr('fill', 'none')
      .style('stroke-width', '2px')
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

    let nodeEnter = nodes
      .enter()
      .append('g')
      .attr('class', 'nodes')
      .style('transform-origin', '50% 50%')

    nodeEnter
      .append('circle')
      .attr('r', function (d) {
        // return radius(d.value / 2)
        return radius(40)
      })
      .attr('fill', function (d) {
        return color[0]
      })

    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.name
      })
    nodeEnter.attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')'
    })
    nodeEnter.call(
      d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    )
  }

  // })
  draw()

  function dragstarted (d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
  }

  function dragged (d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
    // update(d3.select(this))
    // draw()
  }
  function dragended (d) {
    // if (!d3.event.active) simulation.alphaTarget(0)
    // d.fx = null
    // d.fy = null
  }
}

export default {
  initChart: initChart
}
