import { JbHome } from "./jbhome";
// import { useState } from "react";
import { JbGallery } from "./jbgallery";
import { JbContact } from "./jbcontact";
import { JbUser } from "./jbuser";
import { JbTeam } from "./jbteam";
import { NavLink, Tab, Tabs } from "react-bootstrap";

export function JbTabs() {
  return (
    <>
      <Tabs
        style={{
          marginLeft: "-110px",
        }}
        defaultActiveKey="first"
        className="btn btn-light"

        // onSelect={(event) => setTabInfo({ ...tabInfo, currentTab: event })}
        // activeKey={tabInfo.currentTab}
      >
        <Tab eventKey="first" title="Home">
          <JbHome></JbHome>
        </Tab>
        <li class="active">
          <a href="#">Home</a>
        </li>

        <Tab eventKey="second" title="Team">
          <JbTeam></JbTeam>
        </Tab>

        <Tab eventKey="third" title="Gallery">
          <JbGallery></JbGallery>
        </Tab>
        <Tab eventKey="fourth" title="Contact">
          <JbContact></JbContact>
        </Tab>
        <Tab eventKey="fifth" title="User Manual">
          <JbUser></JbUser>
        </Tab>
      </Tabs>

      <Tabs>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
        <Tab></Tab>
      </Tabs>
    </>
  );
}
