// Copyright 2021 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

import { cockroach } from "@cockroachlabs/crdb-protobuf-client";
import { fetchData } from "src/api";

const RESET_SQL_STATS_PATH = "/_status/resetsqlstats";

export const resetSQLStats = (): Promise<cockroach.server.serverpb.ResetSQLStatsResponse> => {
  return fetchData(
    cockroach.server.serverpb.ResetSQLStatsResponse,
    RESET_SQL_STATS_PATH,
    cockroach.server.serverpb.ResetSQLStatsRequest,
    new cockroach.server.serverpb.ResetSQLStatsRequest(),
  );
};
