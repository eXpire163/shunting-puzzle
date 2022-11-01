import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type StockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerStock = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly favorite?: boolean | null;
  readonly ontrack?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStock = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly url?: string | null;
  readonly favorite?: boolean | null;
  readonly ontrack?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stock = LazyLoading extends LazyLoadingDisabled ? EagerStock : LazyStock

export declare const Stock: (new (init: ModelInit<Stock, StockMetaData>) => Stock) & {
  copyOf(source: Stock, mutator: (draft: MutableModel<Stock, StockMetaData>) => MutableModel<Stock, StockMetaData> | void): Stock;
}