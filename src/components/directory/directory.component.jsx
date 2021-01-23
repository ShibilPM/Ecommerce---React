import React from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "CATS",
          imageUrl:
            "https://images.unsplash.com/photo-1591290409635-b25231ce25d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
          id: 1,
          linkUrl: "shop/cats",
        },
        {
          title: "DOGS",
          imageUrl:
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
          id: 2,
          linkUrl: "shop/dogs",
        },
        {
          title: "BIRDS",
          imageUrl:
            "https://images.unsplash.com/photo-1477771736326-5a60ac787ac9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
          id: 3,
          linkUrl: "shop/birds",
        },
        {
          title: "NEST",
          imageUrl:
            "https://images.unsplash.com/photo-1591189425065-c15ece15878b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
          size: "large",
          id: 4,
          linkUrl: "shop/nest",
        },
        {
          title: "CAGE",
          imageUrl:
            "https://images.unsplash.com/photo-1506939754500-f27bc71fccd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1508&q=80",
          size: "large",
          id: 5,
          linkUrl: "shop/cages",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
