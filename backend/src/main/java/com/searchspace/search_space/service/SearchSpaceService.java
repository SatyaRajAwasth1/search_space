package com.searchspace.search_space.service;

import com.searchspace.search_space.pod.PicOfTheDayResponse;
import com.searchspace.search_space.search.SearchResponse;

import java.util.List;

/**
 * description goes here...
 * <br></br>
 *
 * @author SatyaRajAwasth1  on 10/7/2023
 */
public interface SearchSpaceService {
    PicOfTheDayResponse getPicOfTheDay();
    List<SearchResponse> searchSpace(String keyword);
}
