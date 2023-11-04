import React, { lazy } from "react";
import "./styles/App.css";
import { testimonials, notifications } from "data";
import TestCarousel from "components/InfiniteCarousel";
import Input from "components/Input";
import Dropdown from "components/Dropdown/Dropdown";
import MinimalButton from "components/MinimalButton";
import InfiniteCarousel from "components/InfiniteCarousel";
const DragDropCarousel = lazy(() => import("components/DragDropCarousel"));
const TestimonialCard = lazy(() => import("components/TestimonialCard"));
const NotificationCard = lazy(() => import("components/NotificationCard"));
const ShowCase = lazy(() => import("components/ShowCase"));
const Login = lazy(() => import("components/Login"));

function App() {
  return (
    <div className="App">
      <ShowCase />
      <Login />
    </div>
  );
}

export default App;
