package com.searchspace.search_space.pod;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ApodResponse implements Serializable {
    @JsonProperty("date")
    private String date;

    @JsonProperty("explanation")
    private String explanation;

    @JsonProperty("hdurl")
    private String hdUrl;

    @JsonProperty("media_type")
    private String mediaType;

    @JsonProperty("service_version")
    private String serviceVersion;

    @JsonProperty("title")
    private String title;

    @JsonProperty("url")
    private String url;
}
