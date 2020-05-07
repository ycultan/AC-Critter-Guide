/*
 *
 *  File: DropdownSelector.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React from "react";
import { FormControl, Select, Input, InputLabel, MenuItem } from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    },
  },
};

export const DropdownSelector = ({ label, data, selected, onSelect }) => {
  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selected}
        onChange={onSelect}
        input={<Input />}
        MenuProps={MenuProps}
      >
        {data.map(value => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
