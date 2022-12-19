export interface State {
    name: string;
    state_code: string;
}

export interface Country {
    name: string;
    iso3: string;
    iso2: string;
    states: State[];
}

export interface ApiList<T> {
    error: boolean;
    msg: string;
    data: T[];
}
