import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div className="list">
      {travelPlansData.map((listing) => {
        return (
          <>
            <img src={listing.image} />
            <p>
              {listing.destination} {listing.days} days
            </p>
            <p>{listing.description}</p>
            <p>
              <b>Price: </b>
              {listing.totalCost} €
            </p>
            {listing.totalCost > 1500 && <p>Premium</p>}
            {listing.totalCost < 350 && <p>Great Deal!</p>}
            {listing.allInclusive === true && <p>All-Inclusive</p>}
            <button>Delete</button>
          </>
        );
      })}
    </div>
  );
}

export default TravelList;
