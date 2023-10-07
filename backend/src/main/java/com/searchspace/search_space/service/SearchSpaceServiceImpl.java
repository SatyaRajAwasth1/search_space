package com.searchspace.search_space.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.searchspace.search_space.exception.CustomException;
import com.searchspace.search_space.pod.ApodResponse;
import com.searchspace.search_space.pod.PicOfTheDayResponse;

import com.searchspace.search_space.search.NASAApiResponse;
import com.searchspace.search_space.search.SearchResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

/**
 * description goes here...
 * <br></br>
 *
 * @author SatyaRajAwasth1  on 10/7/2023
 */

@Slf4j
@Service
public class SearchSpaceServiceImpl implements SearchSpaceService{
    private static final String API_KEY = "X6hVXZsFPx97Jr0LSgKILdd674bBqKwO5Wz7xlXM";
    private static final String DEFAULT_ERROR_MESSAGE = "Sorry! service currently not available.";
    private RestTemplate restTemplate = new RestTemplate();
    private ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public PicOfTheDayResponse getPicOfTheDay() {
        String podUrl = "https://api.nasa.gov/planetary/apod";
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromUriString(podUrl).queryParam("api_key", API_KEY);
        ResponseEntity<Object> response = restTemplate.getForEntity(uriBuilder.toUriString(), Object.class);
        if (response.getStatusCode().is2xxSuccessful() && response.getBody()!= null){
            ApodResponse apodResponse = objectMapper.convertValue(response.getBody(), ApodResponse.class);
            return PicOfTheDayResponse.builder()
                    .date(apodResponse.getDate())
                    .title(apodResponse.getTitle())
                    .url(apodResponse.getUrl())
                    .description(apodResponse.getExplanation())
                    .build();
        }
        throw new CustomException("Sorry! service currently not available.");
    }

    @Override
    public List<SearchResponse> searchSpace(String keyword) {
        String searchUrl = "https://images-api.nasa.gov/search";
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromUriString(searchUrl).queryParam("q", keyword);
        log.info("Calling API with url : {}",uriBuilder.toUriString());
        ResponseEntity<Object> response = restTemplate.getForEntity(uriBuilder.toUriString(), Object.class);

        log.info("API called with response: {}", response.getBody());
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            NASAApiResponse apiResponse = objectMapper.convertValue(response, NASAApiResponse.class);
            return apiResponse.getCollection()
                    .getItems()
                    .stream()
                    .map(this::mapToSearchResponse)
                    .toList();
        }
        throw new CustomException(DEFAULT_ERROR_MESSAGE);
    }

    private SearchResponse mapToSearchResponse(NASAApiResponse.Item item) {
        return  SearchResponse.builder()
                .url(item.getLinks().get(0).getHref())
                .description(item.getData().get(0).getDescription())
                .dateCreated(item.getData().get(0).getDate_created())
                .title(item.getData().get(0).getTitle())
                .build();
    }
}
