package com.searchspace.search_space.pod;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

@Getter
@Setter
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class PicOfTheDayResponse implements Serializable {
    private String date;
    private String url;
    private String title;
    private String description;
}
