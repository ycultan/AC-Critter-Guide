/*
 *
 *  File: Footer.js
 *  Author: Rosemary
 *  Copyright (c) 2020 Rosemary Chen
 */

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Icon, Link, Typography } from "@material-ui/core";
import { AC_CRITTER_GUIDE_DISCORD_URL, GITHUB_URL, LINKED_IN_SECONDARY_URL, LINKED_IN_URL, VENMO_URL } from "../../const";
import { CritterDataContext } from "../../context/CritterDataContext";
import "./styles.css";

export const Footer = () => {
  const { onCritterTabChange } = useContext(CritterDataContext);
  const history = useHistory();

  const buttonClicked = (critterType) => {
    onCritterTabChange(critterType);
    history.push(`/${critterType}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

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
          <Link component="button" variant="overline" color="inherit" onClick={e => buttonClicked(e.target.innerHTML)}>
            fish
          </Link>
          &middot;
          <Link component="button" variant="overline" color="inherit" onClick={e => buttonClicked(e.target.innerHTML)}>
            insect
          </Link>
          &middot;
          <Link component="button" variant="overline" color="inherit" onClick={e => buttonClicked(e.target.innerHTML)}>
            villager
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
