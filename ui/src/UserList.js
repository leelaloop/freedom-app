// eslint-disable-next-line

import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./UserList.css";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel
} from "@material-ui/core";


const UserList = () => (
  <Query
    query= {gql`
      {
        users (first:10) {
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return (
        <div className="UserList">
        <h1>Users</h1>
        <ul>
          {data.users.map(({name}, i) => (
          <li key={i}>{name}</li>
          ))}
        </ul>
        </div>
      );
    }}
  </Query>
);
  
export default UserList