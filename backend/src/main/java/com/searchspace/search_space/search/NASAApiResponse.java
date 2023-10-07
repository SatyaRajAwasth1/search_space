package com.searchspace.search_space.search;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

/**
 * description goes here...
 * <br></br>
 *
 * @author SatyaRajAwasth1  on 10/7/2023
 */:q
:q


@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class NASAApiResponse implements Serializable{
    private Collection collection;

    @Getter
    @Setter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Collection implements Serializable {
        private String version;
        private String href;
        private List<Item> items;
    }

    @Getter
    @Setter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Item implements Serializable{
        private List<Data> data;
        private List<Links> links;
    }

    @Getter
    @Setter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Data implements Serializable {
        private String description;
        private String date_created;
        private String title;
    }

    @Getter
    @Setter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Links implements Serializable {
        private String href;
        private String rel;
        private String render;
    }
}
