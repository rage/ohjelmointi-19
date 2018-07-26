import React from 'react'
import styled from 'styled-components'
import Timeline from 'react-visjs-timeline'
import "vis/dist/vis-timeline-graph2d.min.css"
import vis from 'vis/dist/vis-timeline-graph2d.min'

const options = {
  width: '100%',
  height: '150px',
  stack: false,
  zoomMin: 1000000,
  zoomMax: 7500000000,
  type: 'background',
  format: {
    minorLabels: {
      minute: 'HH:mm',
      hour: 'HH:mm',
    },
  },
  min: '2018-12-1',
  max: '2019-6-1',
  selectable: false,
  moment: function(date) {
    return vis.moment(date).utcOffset('+03:00');
  }
}

const dates = [
  '2018-12-14',
  '2019-1-21',
  '2018-12-28',
  '2019-1-28',
  '2019-1-11',
  '2019-2-4',
  '2019-1-25',
  '2019-2-11',
  '2019-2-1',
  '2019-2-18',
  '2019-2-8',
  '2019-2-25',
  '2019-2-15',
  '2019-3-4',
  '2019-3-1',
  '2019-3-18',
  '2019-3-8',
  '2019-3-25',
  '2019-3-15',
  '2019-4-1',
  '2019-3-22',
  '2019-4-8',
  '2019-3-29',
  '2019-4-15',
  '2019-4-12',
  '2019-4-29',
  '2019-4-19',
  '2019-5-6',
]

const items = dates.map((date, i) => {
  if (i % 2 === 0) {
    return {
      content: `Osa ${i / 2 + 1} julkaistaan`,
      start: date,
      type: 'point',
    }
  } else {
    return {
      content: `Osan ${Math.round(i / 2)} deadline`,
      start: date,
      type: 'point',
    }
  }
})

export default () => (
  <div>
    <Timeline options={options} items={items} />
  </div>
)
