import React, { useState } from "react";

function BabyNames({ babyList }) {

    const babyFilterList = babyList
  
    const sortedNames = babyFilterList
      .sort((name1, name2) => name1.name.localeCompare(name2.name));
    
    const favouriteBaby = (name) => console.log(name.target);
    
    return (
      <div>
        <h3>Favourites</h3>
        <div style={{ display: "flex", flexWrap: "wrap", height: "fit-content", border: ".2rem solid white" }}>
          {sortedNames
            .map((babyName) => {
  
              let color = babyName.sex === "f" ? "#cf1760" : "#10ebdc";
  
              return (
                <p style={
                  {
                    padding: "8px",
                    margin: "3.2px",
                    width: "fit-content",
                    backgroundColor: color,
                    textAlign: "center",
                    border: "ridge",
                    borderRadius: "5px"
                   }}
                  key={babyName.id}
                  onClick={favouriteBaby}
                >
                  {babyName.name}
                </p>
              )
            }
            )
          }
        </div>
  
      </div>)
  }

export default BabyNames
