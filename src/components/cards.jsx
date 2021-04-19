import React, { useState } from "react";
import people from "./data.jsx";

// Every individual card's structure..
function Card(props) {
  return (
    <div className="cards_container">
      <div id="image_container"><img onClick={props.clearList} id="logo_image" src={props.logo} alt="photosnap" />
      </div>
      <div id="posts_container">
        <div className="top">
          <p>{props.company}</p>
          <div style={{ display: props.new ? "flex" : "none" }} id="new_container" >
            <p id="new">NEW!</p>
          </div>
          <div style={{ display: props.featured ? "flex" : "none" }} id="feature_container" >
            <p id="featured" onClick={props.renderL}>
              FEATURED
            </p>
          </div>
        </div>
        <div className="middle">
          <p onClick={props.show}>{props.position}</p>
        </div>
        <div className="bottom">
          <p id="post_detail">{props.postedAt}</p>
          <p id="post_dots">▪</p>
          <p>{props.contract}</p>
          <p id="post_dots">▪</p>
          <p>{props.location}</p>
        </div>
      </div>
      <div id="line"></div>
      <div id="skills_container">
        <button onClick={() => { props.addItem(props.role);}} >{props.role}</button>
        <button onClick={() => { props.addItem(props.level);}} >{props.level}</button>
        {props.languages.map((item, index) => {
          return (
            <button key={index} onClick={() => {props.addItem(item);}} >{item}</button>
          );
        })}
        {props.tools.map((item, index) => {
          return (
            <button key={index} onClick={() => {props.addItem(item);}} >{item}</button>
          );
        })}
      </div>
    </div>
  );
}

// Render all the cards..
function Cards() {
  function dlanguages(props) {
    setItem((preItems) => {
      return preItems.filter((item, index) => {
        return item !== props;
      });
    });
  }

  const [findItem, setItem] = useState([]);
  // Add items to search bar...
  function addItem(props) {
    if (findItem.filter((item, index) => item === props).length === 0) {
      setItem((preItems) => {
        return [...preItems, props];
      });
    } else {
      console.log("item already exist!");
    }
  }
  // Check for search bar items in the cards..
  function filterItem(props) {
    var f = true;
    findItem.forEach((i) => {
      if (
        props.role !== i &&
        props.level !== i &&
        !props.languages.includes(i) &&
        !props.tools.includes(i)
      )
        f = false;
    });
    return f;
  }
  return (
    <div>
      <div
        style={{ display: findItem.length === 0 ? "none" : "flex" }} className="filterBar_container">
        {findItem.map((item, index) => {
          return (
            <div key={index} className="filtered_tablets_container">
              <div className="skill">
                <p>{item}</p>
              </div>
              <div
                onClick={() => {
                  dlanguages(item);
                }}
                className="cross_svg_container"
              >
                <img id="cross" src="./images/icon-remove.svg" alt="cross" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="cards_outer_container">
        {people.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                // Display cards if search bar items are present in card..
                display: filterItem(item) === true ? "flex" : "none"
              }}
            >
              <Card
                key={index}
                logo={item.logo}
                company={item.company}
                id={item.id}
                new={item.new}
                featured={item.featured}
                position={item.position}
                role={item.role}
                level={item.level}
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
                languages={item.languages}
                tools={item.tools}
                addItem={addItem}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
