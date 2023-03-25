import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom'

const TourCard = ({ tour }) => {
  const { id, title, photo, price, featured, avgRating, reviews } = tour;

  return (
    <div className="tour__card">
        <Card>
            <div className="tour__img">
                <img src="" alt="" />
            </div>
        </Card>
    </div>
  );
};

export default TourCard;
