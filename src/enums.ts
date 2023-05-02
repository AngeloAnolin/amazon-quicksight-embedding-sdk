// Copyright 2022 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export enum InfoMessageEventName {
    CONTENT_LOADED = 'CONTENT_LOADED',
    ERROR_OCCURRED = 'ERROR_OCCURRED',
    SIZE_CHANGED = 'SIZE_CHANGED',
    PARAMETERS_CHANGED = 'PARAMETERS_CHANGED',
    SELECTED_SHEET_CHANGED = 'SELECTED_SHEET_CHANGED',
    MODAL_OPENED = 'MODAL_OPENED',
    Q_SEARCH_CLOSED = 'Q_SEARCH_CLOSED',
    Q_SEARCH_OPENED = 'Q_SEARCH_OPENED',
    Q_SEARCH_SIZE_CHANGED = 'Q_SEARCH_SIZE_CHANGED',
    Q_SEARCH_ENTERED_FULLSCREEN = 'Q_SEARCH_ENTERED_FULLSCREEN',
    Q_SEARCH_EXITED_FULLSCREEN = 'Q_SEARCH_EXITED_FULLSCREEN',
}

export enum SetterMessageEventName {
    SET_PARAMETERS = 'SET_PARAMETERS',
    SET_SELECTED_SHEET_ID = 'SET_SELECTED_SHEET_ID',
    SET_Q_SEARCH_QUESTION = 'SET_Q_SEARCH_QUESTION',
}

export enum GetterMessageEventName {
    GET_PARAMETERS = 'GET_PARAMETERS',
    GET_SHEETS = 'GET_SHEETS',
    GET_SELECTED_SHEET_ID = 'GET_SELECTED_SHEET_ID',
}

export enum InvokerMessageEventName {
    ACKNOWLEDGE = 'ACKNOWLEDGE',
    INITIATE_PRINT = 'INITIATE_PRINT',
    NAVIGATE_TO_DASHBOARD = 'NAVIGATE_TO_DASHBOARD',
    CLOSE_Q_SEARCH = 'CLOSE_Q_SEARCH',
    UNDO = 'UNDO',
    REDO = 'REDO',
    RESET = 'RESET',
    TOGGLE_BOOKMARKS_PANE = 'TOGGLE_BOOKMARKS_PANE',
}

export const MessageEventName = {...InfoMessageEventName, ...SetterMessageEventName, ...GetterMessageEventName, ...InvokerMessageEventName};
export type MessageEventName = keyof typeof MessageEventName;

export enum ChangeEventLevel {
    ERROR = 'ERROR',
    INFO = 'INFO',
    WARN = 'WARN',
}

export enum InfoChangeEventName {
    FRAME_STARTED = 'FRAME_STARTED',
    FRAME_MOUNTED = 'FRAME_MOUNTED',
    FRAME_LOADED = 'FRAME_LOADED',
}

export enum ErrorChangeEventName {
    FRAME_NOT_CREATED = 'FRAME_NOT_CREATED',
    NO_BODY = 'NO_BODY',
    NO_CONTAINER = 'NO_CONTAINER',
    INVALID_CONTAINER = 'INVALID_CONTAINER',
    NO_URL = 'NO_URL',
    INVALID_URL = 'INVALID_URL',
    NO_FRAME_OPTIONS = 'NO_FRAME_OPTIONS',
    INVALID_FRAME_OPTIONS = 'INVALID_FRAME_OPTIONS',
}

export enum WarnChangeEventName {
    UNRECOGNIZED_CONTENT_OPTIONS = 'UNRECOGNIZED_CONTENT_OPTIONS',
    UNRECOGNIZED_FRAME_OPTIONS = 'UNRECOGNIZED_FRAME_OPTIONS',
    UNRECOGNIZED_EVENT_TARGET = 'UNRECOGNIZED_EVENT_TARGET',
}

export const ChangeEventName = {...InfoChangeEventName, ...ErrorChangeEventName, ...WarnChangeEventName};
export type ChangeEventName = keyof typeof ChangeEventName;

export enum ExperienceType {
    CONSOLE = 'CONSOLE',
    CONTEXT = 'CONTEXT',
    CONTROL = 'CONTROL',
    VISUAL = 'VISUAL',
    DASHBOARD = 'DASHBOARD',
    QSEARCH = 'QSEARCH',
}
