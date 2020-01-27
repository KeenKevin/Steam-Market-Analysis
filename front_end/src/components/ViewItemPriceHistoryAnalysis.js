import React, { useEffect, useState } from "react";
import { Card, Image, List, Header, Icon, Label, Menu, Table, Pagination} from "semantic-ui-react";
import axios from 'axios';

export const ViewItemPriceHistoryAnalysis = ({ item_name }) => {
  const [priceHistoryAnalysis, setPriceHistoryAnalysis] = useState([]);

  useEffect(() => {
    axios
    .get("/view_item_price_history_analysis", {
      params: {
        item_name,
      },
    })
    .then(({ data }) => {
      setPriceHistoryAnalysis(data.price_history_analysis);
    })
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Percentage Change</Table.HeaderCell>
          <Table.HeaderCell>Volume</Table.HeaderCell>
          <Table.HeaderCell>Turnover</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {priceHistoryAnalysis.map(priceHistoryAnalysisPoint => {
          if (priceHistoryAnalysisPoint.price_history_point_volume != 0) {
            return (
              <Table.Row>
                <Table.Cell>{priceHistoryAnalysisPoint.price_history_point_date}</Table.Cell>
                <Table.Cell>{priceHistoryAnalysisPoint.price_history_point_price}</Table.Cell>
                <Table.Cell>{priceHistoryAnalysisPoint.price_history_point_percentage_change}</Table.Cell>
                <Table.Cell>{priceHistoryAnalysisPoint.price_history_point_volume}</Table.Cell>
                <Table.Cell>{priceHistoryAnalysisPoint.price_history_point_turnover}</Table.Cell>
              </Table.Row>
            )
          }
        })}
      </Table.Body>
    </Table>
  );
};

export default ViewItemPriceHistoryAnalysis;
