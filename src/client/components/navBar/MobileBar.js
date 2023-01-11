import { List } from "@mui/material";
import {
  AnimatedArrow,
  MobileNavOpening,
  Container,
  FixedContainer,
  NavLink,
} from "layout/navBar/MobileBar";
import { renderOnCondition } from "helpers/renderOnCondition";
import { useState } from "react";

const MobileBar = ({ navigationOptions }) => {
  const [open, setOpen] = useState(false);

  const openingHandler = () => setOpen(!open);

  const listComponentPadding = 16;
  const listItemHeight = 52;
  const getTranslateXValue = (itemsAmount) =>
    itemsAmount * listItemHeight + listComponentPadding;

  const translateX = getTranslateXValue(navigationOptions.length);

  return (
    <>
      {renderOnCondition(<FixedContainer onClick={openingHandler} />, open)}
      <Container open={open} translateX={translateX}>
        <MobileNavOpening
          variant='contained'
          onClick={openingHandler}
          open={open}
        >
          <AnimatedArrow open={open} />
        </MobileNavOpening>
        <List>
          {navigationOptions.map((item, index) => (
            <NavLink
              key={`${item.to}-${index}`}
              label={item.label}
              icon={item.mobileIcon}
              to={item.to}
              state={item.state}
              active={item.state.activePath}
              onClick={openingHandler}
              isExternal={item.isExternal}
              {...item.anchorProp}
            />
          ))}
        </List>
      </Container>
    </>
  );
};

export default MobileBar;
