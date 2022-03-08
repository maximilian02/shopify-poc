import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import React from "react";

class Index extends React.Component {
  state = { open: false }
  render() {
    return (
      <Page 
        title="A product selector for testing purpose"
        primaryAction={{
          content: 'Select product',
          onAction: () => this.setState({ open: true })
        }}
      >
        <ResourcePicker 
          resourceType='Product'
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
          onSelection={(resources) => this.handleSelection(resources)}
        />
      </Page>
    );
  }

  handleSelection = (resources) => {
    const ids = resources.selection.map(p => p.id);
    this.setState({ open: false });
    console.log(ids);
  }
}

export default Index;
