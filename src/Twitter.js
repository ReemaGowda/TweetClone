import React, { Component } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

class Twitter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <TwitterFollowButton screenName={"world health organization"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="who"
          options={{ height: 900 }}
        />
      </div>
    );
  }
}

export default Twitter;
