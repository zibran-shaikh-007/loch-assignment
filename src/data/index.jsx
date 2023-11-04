import NotificationsPreview from "components/NotificationsPreview";
import TestimonialPreview from "components/TestimonialsPreview";
import WhaleActivityPreview from "components/WhaleActivityPreview";
import { resources } from "Constants";

export const testimonials = [
  {
    name: "Jack F 1",
    title: "Ex Blackrock PM",
    content: `“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`,
  },
  {
    name: "Yash P 2",
    title: "Research, 3poch Crypto Hedge Fund",
    content: `“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`,
  },
  {
    name: "Shiv S 3",
    title: "Co-Founder Magik Labs",
    content: `“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`,
  },
];

export const notifications = [
  {
    type: "email",
    icon: resources.img.notification.bell,
    isCheck: false,
    header: `We’ll be sending notifications to you here`,
  },
  {
    type: "wallet",
    icon: resources.img.notification.barChart,
    isCheck: true,
    description: "Notify me when any wallets move more than",
    options: [
      { label: "$1,000.00", value: "1000" },
      { label: "$10,000", value: "10000" },
      { label: "$20,000", value: "20000" },
      { label: "$50,000", value: "50000" },
      { label: "$1,00,000", value: "100000" },
    ],
  },
  {
    type: "activity",
    icon: resources.img.notification.clock,
    isCheck: true,
    description: "Notify me when any wallet dormant for",
    options: [
      { label: "> 30 days", value: "30" },
      { label: "> 60 days", value: "60" },
      { label: "> 90 days", value: "90" },
      { label: "> 120 days", value: "120" },
    ],
    status: "becomes active",
  },
];

export const previewAll = [
  {
    type: "notification",
    icon: resources.img.bell,
    title: "Get notified when a highly correlated whale makes a move",
    description:
      "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
    toolbar: <NotificationsPreview />,
  },

  {
    type: "whale",
    icon: resources.img.eye,
    title: "Watch what the whales are doing",
    description: "All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.",
    toolbar: <WhaleActivityPreview />,
  },
  {
    type: "testimonial",
    icon: resources.img.logo2,
    heading: "Testimonials",
    toolbar: <TestimonialPreview />,
  },
];
