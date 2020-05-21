/*
 *
 *  File: Footer.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React from "react";
import { Icon, Link, Typography } from "@material-ui/core";
import { AC_CRITTER_GUIDE_DISCORD_URL, GITHUB_URL, LINKED_IN_SECONDARY_URL, LINKED_IN_URL, VENMO_URL } from "../../const";
import { getQueryParam } from "../../data/utils";
import "./styles.css";

// TODO: use later to update queryParams when clicking on critter tabs
const replaceRedirect = (type) => {
  const params = getQueryParam();
  params.type = type;

  let queryStr = '?';
  for (const key in params) {
    queryStr += `${key}=${params[key]}&`;
  }
  queryStr = queryStr.slice(0, -1); // remove trailing '&'

  const path = `${document.location.origin}${queryStr}`;

  window.history.pushState({ path },'', path);
}

export const Footer = () => {
  return (
    <div className={'footer'}>
      <div className="body">
        <div className="iconContainer">
          <Link href={LINKED_IN_URL} target="_blank" color="inherit">
            <Icon>
              <img src={String(require('./icons/linkedin-icon.svg'))} alt="linkedin icon" />
            </Icon>
          </Link>
          <Link href={GITHUB_URL} target="_blank" color="inherit">
            <Icon>
              <img src={String(require('./icons/github-icon.svg'))} alt="github icon" />
            </Icon>
          </Link>
          <Link href={VENMO_URL} target="_blank" color="inherit">
            <Icon>
              <img src={String(require('./icons/venmo-icon.svg'))} alt="venmo icon" />
            </Icon>
          </Link>
          <Link href={AC_CRITTER_GUIDE_DISCORD_URL} target="_blank" color="inherit">
            <Icon>
              <img src={String(require('./icons/discord-icon.svg'))} alt="discord icon" />
            </Icon>
          </Link>
        </div>

        <div className="linkContainer">
          <Link href="/?type=fish" variant="overline" color="inherit">
            Fish
          </Link>
          &middot;
          <Link href="/?type=insect" variant="overline" color="inherit">
            Insect
          </Link>
          &middot;
          <Link href="/?type=villager" variant="overline" color="inherit">
            Villager
          </Link>
        </div>

        <div className="linkContainer">
          <Link href="/about" variant="overline" color="inherit">
            About Us
          </Link>
          &middot;
          <Link href="/privacy" variant="overline" color="inherit">
            Privacy Policy
          </Link>
        </div>

        <div className="creator">
          <Typography  variant="caption" component="p">
            Brought to you by <a href={LINKED_IN_URL}>Lucy</a> & <a href={LINKED_IN_SECONDARY_URL}>Rosemary</a>
          </Typography>
        </div>
      </div>
    </div>
  );
};
