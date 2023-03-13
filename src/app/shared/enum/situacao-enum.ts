import { SelectItem } from "primeng/api";

export enum SituacaoEnum {
    ATIVO = 1,
    INATIVO = 0,
}

export const SituacaoEnumMapper = {
    [SituacaoEnum.ATIVO]: 'Ativo',
    [SituacaoEnum.INATIVO]: 'Inativo',
}

export const SituacaoOptions: SelectItem[] = [
    { value: SituacaoEnum.ATIVO, label: SituacaoEnumMapper[SituacaoEnum.ATIVO] },
    { value: SituacaoEnum.INATIVO, label: SituacaoEnumMapper[SituacaoEnum.INATIVO] },
];