import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tags1', 'tags2', 'tags3']
    };
    styles = {
        fontsize: 100,
        fontweight: "bold"
    };
    renderTags() {
        if (this.state.tags.length === 0 ) return <p>There are no tags !</p>
        return <ul>
            {this.state.tags.map(tag => <li key={{tag}}>{tag}</li>)}
        </ul>
    }
    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm ">Increment</button>
                {this.state.tags.length === 0 && "Please create a new tag!" }
                {this.renderTags()}

            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        //return this.state.count === 0 ? 'Zero' : this.state.count;
        //return count === 0 ? <h1>Zero</h1> : count;
        return count === 0 ? 'Zero' : count;
    };
}
//export default Counter;