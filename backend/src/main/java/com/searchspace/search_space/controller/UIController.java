package com.searchspace.search_space.controller;

import com.searchspace.search_space.pod.PicOfTheDayResponse;
import com.searchspace.search_space.search.SearchResponse;
import com.searchspace.search_space.service.SearchSpaceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * description goes here...
 * <br></br>
 *
 * @author SatyaRajAwasth1  on 10/7/2023
 */

@RestController("/api/v0")
public class UIController {

    private final SearchSpaceService searchSpaceService;

    public UIController(SearchSpaceService searchSpaceService) {
        this.searchSpaceService = searchSpaceService;
    }

    @GetMapping("/ping")
    public ResponseEntity<String> justPing(){
        return new ResponseEntity<>("Hey, I am up!!!", HttpStatus.OK);
    }

    @GetMapping("/pod")
    public ResponseEntity<PicOfTheDayResponse> getPicOfTheDay(){
        return new ResponseEntity<>(searchSpaceService.getPicOfTheDay(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<SearchResponse>> search(@RequestParam("q") String keyword){
        return new ResponseEntity<>(searchSpaceService.searchSpace(keyword), HttpStatus.OK);
    }
}
