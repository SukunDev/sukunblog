import React, { useState } from "react";

function usePaginations({ meta_paginator }) {
  const { last_page, current_page } = meta_paginator;

  if (current_page - 3 < 1) {
    var start_count = 1;
    if (last_page <= 7) {
      var end_count = last_page;
    } else {
      var end_count = 7;
    }
  } else {
    var start_count = current_page - 3;
    var end_count = current_page + 3;
    if (end_count > last_page) {
      end_count = last_page;
      start_count = last_page - 6;
      if (start_count < 1) {
        start_count = 1;
      }
    }
  }

  let pages = [];
  for (let i = start_count; i <= end_count; i++) {
    pages.push(i);
  }

  return {
    current_page,
    last_page,
    pages,
  };
}

export default usePaginations;
