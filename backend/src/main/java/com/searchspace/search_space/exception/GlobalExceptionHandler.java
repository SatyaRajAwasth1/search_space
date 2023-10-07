package com.searchspace.search_space.exception;

/**
 * description goes here...
 * <br></br>
 *
 * @author SatyaRajAwasth1  on 10/7/2023
 */

import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.ControllerAdvice;
        import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<String> handleCustomException(CustomException ex) {
        // Handle your custom exception here
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleOtherExceptions(Exception ex) {
        // Handle other exceptions (not specifically caught)
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Sorry, service not available!!! Try again later.");
    }
}

