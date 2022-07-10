import {SecureStorageService} from "../services/secure-storage.service";
import {AbstractRestService} from "../services/genericservice";

interface Option {
    headers: object;
    params: object | null | undefined;
}
export class DynamicTableCrud<T> {
    data !: T[];
    numberItems !: number;
    protected options !: Option;

    constructor(protected service: AbstractRestService<T>, protected actionUrl: string,
                protected secureStorageService: SecureStorageService) {
    }

    async getData(params?: object): Promise<void> {
        if (this.options === undefined){
        const access = localStorage.getItem('access');
        if (access != null){
                this.options = {
                    headers: {Authorization : `Bearer ${this.secureStorageService.getToken(access)}`},
                    params: null
                };
            }
        }
        if (params !== null && params !== undefined){
            this.options.params = params;
        }
        this.service.list(this.actionUrl, this.options).subscribe((response) => {
            this.data = response;
            this.numberItems = response.length;
        });
    }

    delete(id: number | undefined, index: number): void {
        console.log(id);
        if (id !== undefined) {
            this.service.delete(this.actionUrl, id, this.options).subscribe(async () => {
                this.data.splice(index, 1);
                this.numberItems--;
            });
        }
    }
}
