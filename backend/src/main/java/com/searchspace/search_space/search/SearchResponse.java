package com.searchspace.search_space.search;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * description goes here...
 * <br></br>
 *
 * @author SatyaRajAwasth1  on 10/7/2023
 */

@Builder
@Getter
@Setter
public class SearchResponse implements Serializable {
    private String description;
    private String dateCreated;
    private String url;
    private String title;
}
