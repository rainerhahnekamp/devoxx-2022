/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Episodes} from "./Episodes.server";
import {fetch} from 'react-fetch';
import {parseEpisode} from "./logic/parse-episode";

export default function App() {
  const response = fetch('http://localhost:8080/episode').json();
  const episodes = response.map(parseEpisode);
  return <Episodes episodes={episodes}></Episodes>;
}
