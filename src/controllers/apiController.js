import axios from 'axios';

import keys from '../../config/keys';

export const getSummonerByName = async(req, res) => {
  const { summonerName } = req.query;
  const summoner = await axios.get(
    `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${keys.riotAPIKey}`
  );
  res.send(summoner.data);
};

export const getRecentMatchesByAccountId = async(req, res) => {
  const { accountId } = req.query;
  const matches = await axios.get(
    `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}/recent?api_key=${keys.riotAPIKey}`
  );
  res.send(matches.data);
};
