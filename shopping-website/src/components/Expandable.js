import React, { useState } from "react";
import categories from "./categories.json";
import { List, ListItem, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
const ExpandableList = ({ categories, value }) => {
  const [fashionDetails, setFashionDetails] = useState([]);
  console.log("Hello", categories, value);

  console.log("fashionDetails", fashionDetails);
  const [open, setOpen] = useState({});

  const handleClick = (name) => {
    console.log(name);
    setOpen({ ...open, [name]: !open[name] });
  };

  return (
    <List>
      {value.map((category) => (
        <div key={category.name}>
          <ListItem button onClick={() => handleClick(category.subcategories)}>
            {category.name}
            {open[category.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[category.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.subcategories &&
                category.subcategories.map((sub) => (
                  <ExpandableList key={sub.name} categories={[sub]} />
                ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default ExpandableList;
