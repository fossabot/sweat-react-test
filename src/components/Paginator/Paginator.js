import React from "react";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { Container, NavigationIcon, Number } from "./Styles";

const Paginator = ({ count, currentPage, onNextAction, onPrevAction, onPageAction }) => {
  const generatePages = () => {
    const numbers = [];
    for (let number = 1; number <= count; number += 1) {
      numbers.push(
        <NavigationIcon disabled={currentPage === number} onClick={() => onPageAction(number)}>
          <Number active={number === currentPage}>
            <span>{number}</span>
          </Number>
        </NavigationIcon>,
      );
    }
    return numbers;
  };
  return (
    <Container>
      <NavigationIcon disabled={currentPage === 1} onClick={() => onPrevAction(currentPage - 1)}>
        <ArrowLeft fontSize="large" color={currentPage === 1 ? "disabled" : "primary"} />
      </NavigationIcon>
      {generatePages()}
      <NavigationIcon disabled={false} onClick={() => onNextAction(currentPage + 1)}>
        <ArrowRight fontSize="large" color="primary" />
      </NavigationIcon>
    </Container>
  );
};

Paginator.propTypes = {
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onNextAction: PropTypes.func.isRequired,
  onPrevAction: PropTypes.func.isRequired,
  onPageAction: PropTypes.func.isRequired,
};

export default Paginator;
