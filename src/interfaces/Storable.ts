export interface Storable {
    save(data: string | number): void;
    getData(): (string | number)[];
}