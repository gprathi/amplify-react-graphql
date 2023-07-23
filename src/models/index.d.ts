import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Vacationtype {
  CRUISE = "CRUISE",
  ALL_INCLUSIVE = "ALL_INCLUSIVE",
  NATIONAL_PARKS = "NATIONAL_PARKS",
  EUROPE = "EUROPE"
}



type EagerLead = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lead, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly address?: string | null;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly typeOfVacation?: Vacationtype | keyof typeof Vacationtype | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLead = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lead, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly address?: string | null;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly typeOfVacation?: Vacationtype | keyof typeof Vacationtype | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Lead = LazyLoading extends LazyLoadingDisabled ? EagerLead : LazyLead

export declare const Lead: (new (init: ModelInit<Lead>) => Lead) & {
  copyOf(source: Lead, mutator: (draft: MutableModel<Lead>) => MutableModel<Lead> | void): Lead;
}