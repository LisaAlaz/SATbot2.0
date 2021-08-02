// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import YesNoOptions from "./widgets/options/GeneralOptions/YesNoOptions";
import ProtocolOptions from "./widgets/options/GeneralOptions/ProtocolOptions";
import ContinueOptions from "./widgets/options/GeneralOptions/ContinueOptions";
import FeedbackOptions from "./widgets/options/GeneralOptions/FeedbackOptions";
import EmotionOptions from "./widgets/options/GeneralOptions/EmotionOptions";
import EventOptions from "./widgets/options/GeneralOptions/EventOptions";
import YesNoProtocolOptions from "./widgets/options/GeneralOptions/YesNoProtocolsOptions";
const botName = "SATbot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage("Please enter your username:", {
      withAvatar: true,
      delay: 50,
    }),
  ],

  state: {
    userState: null,
    username: null,
    password: null,
    sessionID: null,
    protocols: [],
    askingForProtocol: false
  },
  customComponents: {
    // header: () => <div style={{ fontFamily: 'Arial', color: '#646E6E', backgroundColor: '#f1f1f1', padding: "8px", borderRadius: "3px"}}>SATbot</div>
  },

  widgets: [
    {
      widgetName: "YesNo",
      widgetFunc: (props) => <YesNoOptions {...props} />,
      mapStateToProps: ["userState", "sessionID"],
    },
    {
      widgetName: "Continue",
      widgetFunc: (props) => <ContinueOptions {...props} />,
      mapStateToProps: ["userState", "sessionID"],
    },
    {
      widgetName: "Emotion",
      widgetFunc: (props) => <EmotionOptions {...props} />,
      mapStateToProps: ["userState", "sessionID"],
    },
    {
      widgetName: "Feedback",
      widgetFunc: (props) => <FeedbackOptions {...props} />,
      mapStateToProps: ["userState", "sessionID"],
    },
    {
      widgetName: "Protocol",
      widgetFunc: (props) => <ProtocolOptions {...props} />,
      mapStateToProps: ["userState", "sessionID", "protocols", "askingForProtocol"],
    },
    {
      widgetName: "YesNoProtocols",
      widgetFunc: (props) => <YesNoProtocolOptions {...props} />,
      mapStateToProps: ["userState", "sessionID"],
    },
    {
      widgetName: "RecentDistant",
      widgetFunc: (props) => <EventOptions {...props} />,
      mapStateToProps: ["userState", "sessionID"],
    },
  ],
};

export default config;
