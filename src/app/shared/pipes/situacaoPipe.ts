import { Pipe, PipeTransform } from "@angular/core";
import { SituacaoEnum, SituacaoEnumMapper } from "../enum/situacao-enum";

@Pipe({
    name: 'situacao'
})
export class SituacaoPipe implements PipeTransform {
    transform(value: SituacaoEnum , ...args: any[]) {
        return SituacaoEnumMapper[value];
    }
}