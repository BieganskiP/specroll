import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/header/Header";
import SlideInMenu from "./component/slideInMenu/SlideInMenu";
import Modal from "./component/modal/Modal";
import css from "./assets/App.module.css";

const Home = lazy(() => import("./pages/home/Home"));
const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));
const Services = lazy(() => import("./pages/services/Services"));

export default function App() {
  return (
    <div className={css.wrapper}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Wczytuje...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
        <SlideInMenu />
        <Modal />
      </BrowserRouter>
    </div>
  );
}
