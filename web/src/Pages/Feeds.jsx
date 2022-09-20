import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedsAction } from "../store/feeds/Feeds.Action";

const Feeds = () => {
  const { loading, data } = useSelector((store) => store.feeds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FeedsAction());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Feeds</h1>

      {data?.map((feed) => (
        <ul key={feed.id}>
          <li>{feed.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
