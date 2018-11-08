import React, { Component } from 'react';

class Diagram extends Component {

    svg_width = 150;
    svg_height = 150;
    bar_height = 15;
    bar_max_length = 50;
    title_length = 50;

    renderRow = (i) => {

        // item contains title and val. do not
        // confuse this with history item which
        // contains multiple diagram items.
        let item = this.props.diagramData[i];

        let svgElemsArr = [];
        let y = i*this.bar_height;

        // Title
        let title_y = y+this.bar_height;
        svgElemsArr.push(<text x="0" y={title_y}>{item.title}</text>);

        // Bar
        let bar_x = this.title_length;
        let bar_width = Math.floor(item.val);
        let bar_style = {
            fill:item.color,
            border:'1px solid black'
        };
        svgElemsArr.push(<rect x={bar_x} y={y} width={bar_width} height={this.bar_height} style={bar_style} />);

        return svgElemsArr;
    }

    renderRows = () => {
        const numRows = this.props.diagramData.length;
        let rows = new Array(numRows);
        for (let i=0; i<numRows; i++) {
            rows[i] = this.renderRow(i);
        }
        return rows;
    }

    render() {
        return (
            <div>
                <svg width={this.svg_width} height={this.svg_height} style={{border: '1px solid black'}}>                    
                    {this.renderRows()}
                </svg>
            </div>
        );
    }

}

export default Diagram;
