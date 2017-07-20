import React, { Component } from "react";

import PageBuilder from "components/pageBuilder/PageBuilder";

export default class PageBuilderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          id: 1,
          name: "Button",
          icon: "plus-square-o"
        },
        {
          id: 2,
          name: "Checkbox Group",
          icon: "check-square-o"
        },
        {
          id: 3,
          name: "Date Field",
          icon: "calendar"
        },
        {
          id: 4,
          name: "File Upload",
          icon: "upload"
        },
        {
          id: 5,
          name: "Header",
          icon: "header"
        },
        {
          id: 6,
          name: "Paragraph",
          icon: "paragraph"
        },
        {
          id: 7,
          name: "Radio Group",
          icon: "dot-circle-o"
        },
        {
          id: 8,
          name: "Select",
          icon: "caret-square-o-down"
        },
        {
          id: 9,
          name: "Text Input",
          icon: "pencil-square-o"
        },
        {
          id: 10,
          name: "Text Area",
          icon: "align-justify"
        }
      ]
    };
  }

  render() {
    return <PageBuilder components={this.state.components} />;
  }
}
