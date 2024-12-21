
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model UserCoupon
 * 
 */
export type UserCoupon = $Result.DefaultSelection<Prisma.$UserCouponPayload>
/**
 * Model UserPoint
 * 
 */
export type UserPoint = $Result.DefaultSelection<Prisma.$UserPointPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Promotor
 * 
 */
export type Promotor = $Result.DefaultSelection<Prisma.$PromotorPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TicketCategory: {
  VIP: 'VIP',
  REGULAR: 'REGULAR'
};

export type TicketCategory = (typeof TicketCategory)[keyof typeof TicketCategory]


export const Category: {
  concert: 'concert',
  sports: 'sports',
  theater: 'theater',
  fanmeet: 'fanmeet',
  seminar: 'seminar'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Location: {
  jakarta: 'jakarta',
  bandung: 'bandung',
  yogyakarta: 'yogyakarta'
};

export type Location = (typeof Location)[keyof typeof Location]


export const StatusOrder: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type StatusOrder = (typeof StatusOrder)[keyof typeof StatusOrder]

}

export type TicketCategory = $Enums.TicketCategory

export const TicketCategory: typeof $Enums.TicketCategory

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Location = $Enums.Location

export const Location: typeof $Enums.Location

export type StatusOrder = $Enums.StatusOrder

export const StatusOrder: typeof $Enums.StatusOrder

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.userCoupon`: Exposes CRUD operations for the **UserCoupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCoupons
    * const userCoupons = await prisma.userCoupon.findMany()
    * ```
    */
  get userCoupon(): Prisma.UserCouponDelegate<ExtArgs>;

  /**
   * `prisma.userPoint`: Exposes CRUD operations for the **UserPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPoints
    * const userPoints = await prisma.userPoint.findMany()
    * ```
    */
  get userPoint(): Prisma.UserPointDelegate<ExtArgs>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.promotor`: Exposes CRUD operations for the **Promotor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotors
    * const promotors = await prisma.promotor.findMany()
    * ```
    */
  get promotor(): Prisma.PromotorDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    UserCoupon: 'UserCoupon',
    UserPoint: 'UserPoint',
    OrderDetails: 'OrderDetails',
    Order: 'Order',
    Review: 'Review',
    Promotor: 'Promotor',
    Event: 'Event',
    Ticket: 'Ticket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "customer" | "userCoupon" | "userPoint" | "orderDetails" | "order" | "review" | "promotor" | "event" | "ticket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      UserCoupon: {
        payload: Prisma.$UserCouponPayload<ExtArgs>
        fields: Prisma.UserCouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findFirst: {
            args: Prisma.UserCouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findMany: {
            args: Prisma.UserCouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          create: {
            args: Prisma.UserCouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          createMany: {
            args: Prisma.UserCouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          delete: {
            args: Prisma.UserCouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          update: {
            args: Prisma.UserCouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          deleteMany: {
            args: Prisma.UserCouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          aggregate: {
            args: Prisma.UserCouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCoupon>
          }
          groupBy: {
            args: Prisma.UserCouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCouponCountArgs<ExtArgs>
            result: $Utils.Optional<UserCouponCountAggregateOutputType> | number
          }
        }
      }
      UserPoint: {
        payload: Prisma.$UserPointPayload<ExtArgs>
        fields: Prisma.UserPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          findFirst: {
            args: Prisma.UserPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          findMany: {
            args: Prisma.UserPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>[]
          }
          create: {
            args: Prisma.UserPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          createMany: {
            args: Prisma.UserPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>[]
          }
          delete: {
            args: Prisma.UserPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          update: {
            args: Prisma.UserPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          deleteMany: {
            args: Prisma.UserPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          aggregate: {
            args: Prisma.UserPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPoint>
          }
          groupBy: {
            args: Prisma.UserPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPointCountArgs<ExtArgs>
            result: $Utils.Optional<UserPointCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Promotor: {
        payload: Prisma.$PromotorPayload<ExtArgs>
        fields: Prisma.PromotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findFirst: {
            args: Prisma.PromotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findMany: {
            args: Prisma.PromotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          create: {
            args: Prisma.PromotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          createMany: {
            args: Prisma.PromotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          delete: {
            args: Prisma.PromotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          update: {
            args: Prisma.PromotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          deleteMany: {
            args: Prisma.PromotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          aggregate: {
            args: Prisma.PromotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotor>
          }
          groupBy: {
            args: Prisma.PromotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotorCountArgs<ExtArgs>
            result: $Utils.Optional<PromotorCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    UserCoupon: number
    UserPoint: number
    Order: number
    Review: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCoupon?: boolean | CustomerCountOutputTypeCountUserCouponArgs
    UserPoint?: boolean | CustomerCountOutputTypeCountUserPointArgs
    Order?: boolean | CustomerCountOutputTypeCountOrderArgs
    Review?: boolean | CustomerCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountUserCouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountUserPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    OrderDetails: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderDetails?: boolean | OrderCountOutputTypeCountOrderDetailsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }


  /**
   * Count Type PromotorCountOutputType
   */

  export type PromotorCountOutputType = {
    events: number
  }

  export type PromotorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | PromotorCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotorCountOutputType
     */
    select?: PromotorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    tickets: number
    Review: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | EventCountOutputTypeCountTicketsArgs
    Review?: boolean | EventCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    OrderDetails: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderDetails?: boolean | TicketCountOutputTypeCountOrderDetailsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    ref_code: string | null
    referred_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    ref_code: string | null
    referred_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    username: number
    name: number
    email: number
    password: number
    avatar: number
    isVerify: number
    ref_code: number
    referred_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    referred_code?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    referred_code?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    referred_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    username: string
    name: string
    email: string
    password: string
    avatar: string | null
    isVerify: boolean
    ref_code: string | null
    referred_code: string | null
    created_at: Date
    updated_at: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    referred_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    UserCoupon?: boolean | Customer$UserCouponArgs<ExtArgs>
    UserPoint?: boolean | Customer$UserPointArgs<ExtArgs>
    Order?: boolean | Customer$OrderArgs<ExtArgs>
    Review?: boolean | Customer$ReviewArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    referred_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    referred_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCoupon?: boolean | Customer$UserCouponArgs<ExtArgs>
    UserPoint?: boolean | Customer$UserPointArgs<ExtArgs>
    Order?: boolean | Customer$OrderArgs<ExtArgs>
    Review?: boolean | Customer$ReviewArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      UserCoupon: Prisma.$UserCouponPayload<ExtArgs>[]
      UserPoint: Prisma.$UserPointPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      name: string
      email: string
      password: string
      avatar: string | null
      isVerify: boolean
      ref_code: string | null
      referred_code: string | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserCoupon<T extends Customer$UserCouponArgs<ExtArgs> = {}>(args?: Subset<T, Customer$UserCouponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany"> | Null>
    UserPoint<T extends Customer$UserPointArgs<ExtArgs> = {}>(args?: Subset<T, Customer$UserPointArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findMany"> | Null>
    Order<T extends Customer$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Customer$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    Review<T extends Customer$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly username: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly password: FieldRef<"Customer", 'String'>
    readonly avatar: FieldRef<"Customer", 'String'>
    readonly isVerify: FieldRef<"Customer", 'Boolean'>
    readonly ref_code: FieldRef<"Customer", 'String'>
    readonly referred_code: FieldRef<"Customer", 'String'>
    readonly created_at: FieldRef<"Customer", 'DateTime'>
    readonly updated_at: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.UserCoupon
   */
  export type Customer$UserCouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    cursor?: UserCouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * Customer.UserPoint
   */
  export type Customer$UserPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    where?: UserPointWhereInput
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    cursor?: UserPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * Customer.Order
   */
  export type Customer$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer.Review
   */
  export type Customer$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model UserCoupon
   */

  export type AggregateUserCoupon = {
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  export type UserCouponAvgAggregateOutputType = {
    id: number | null
    precentage: number | null
    customer_id: number | null
  }

  export type UserCouponSumAggregateOutputType = {
    id: number | null
    precentage: number | null
    customer_id: number | null
  }

  export type UserCouponMinAggregateOutputType = {
    id: number | null
    is_redeem: boolean | null
    precentage: number | null
    created_at: Date | null
    expired_at: Date | null
    customer_id: number | null
    updated_at: Date | null
  }

  export type UserCouponMaxAggregateOutputType = {
    id: number | null
    is_redeem: boolean | null
    precentage: number | null
    created_at: Date | null
    expired_at: Date | null
    customer_id: number | null
    updated_at: Date | null
  }

  export type UserCouponCountAggregateOutputType = {
    id: number
    is_redeem: number
    precentage: number
    created_at: number
    expired_at: number
    customer_id: number
    updated_at: number
    _all: number
  }


  export type UserCouponAvgAggregateInputType = {
    id?: true
    precentage?: true
    customer_id?: true
  }

  export type UserCouponSumAggregateInputType = {
    id?: true
    precentage?: true
    customer_id?: true
  }

  export type UserCouponMinAggregateInputType = {
    id?: true
    is_redeem?: true
    precentage?: true
    created_at?: true
    expired_at?: true
    customer_id?: true
    updated_at?: true
  }

  export type UserCouponMaxAggregateInputType = {
    id?: true
    is_redeem?: true
    precentage?: true
    created_at?: true
    expired_at?: true
    customer_id?: true
    updated_at?: true
  }

  export type UserCouponCountAggregateInputType = {
    id?: true
    is_redeem?: true
    precentage?: true
    created_at?: true
    expired_at?: true
    customer_id?: true
    updated_at?: true
    _all?: true
  }

  export type UserCouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupon to aggregate.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCoupons
    **/
    _count?: true | UserCouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCouponMaxAggregateInputType
  }

  export type GetUserCouponAggregateType<T extends UserCouponAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCoupon[P]>
      : GetScalarType<T[P], AggregateUserCoupon[P]>
  }




  export type UserCouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithAggregationInput | UserCouponOrderByWithAggregationInput[]
    by: UserCouponScalarFieldEnum[] | UserCouponScalarFieldEnum
    having?: UserCouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCouponCountAggregateInputType | true
    _avg?: UserCouponAvgAggregateInputType
    _sum?: UserCouponSumAggregateInputType
    _min?: UserCouponMinAggregateInputType
    _max?: UserCouponMaxAggregateInputType
  }

  export type UserCouponGroupByOutputType = {
    id: number
    is_redeem: boolean
    precentage: number
    created_at: Date
    expired_at: Date | null
    customer_id: number
    updated_at: Date | null
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  type GetUserCouponGroupByPayload<T extends UserCouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
            : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
        }
      >
    >


  export type UserCouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_redeem?: boolean
    precentage?: boolean
    created_at?: boolean
    expired_at?: boolean
    customer_id?: boolean
    updated_at?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_redeem?: boolean
    precentage?: boolean
    created_at?: boolean
    expired_at?: boolean
    customer_id?: boolean
    updated_at?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectScalar = {
    id?: boolean
    is_redeem?: boolean
    precentage?: boolean
    created_at?: boolean
    expired_at?: boolean
    customer_id?: boolean
    updated_at?: boolean
  }

  export type UserCouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type UserCouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $UserCouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCoupon"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      is_redeem: boolean
      precentage: number
      created_at: Date
      expired_at: Date | null
      customer_id: number
      updated_at: Date | null
    }, ExtArgs["result"]["userCoupon"]>
    composites: {}
  }

  type UserCouponGetPayload<S extends boolean | null | undefined | UserCouponDefaultArgs> = $Result.GetResult<Prisma.$UserCouponPayload, S>

  type UserCouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCouponCountAggregateInputType | true
    }

  export interface UserCouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCoupon'], meta: { name: 'UserCoupon' } }
    /**
     * Find zero or one UserCoupon that matches the filter.
     * @param {UserCouponFindUniqueArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCouponFindUniqueArgs>(args: SelectSubset<T, UserCouponFindUniqueArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCoupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCouponFindUniqueOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCouponFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCoupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCouponFindFirstArgs>(args?: SelectSubset<T, UserCouponFindFirstArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCoupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCouponFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCoupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany()
     * 
     * // Get first 10 UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCouponFindManyArgs>(args?: SelectSubset<T, UserCouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCoupon.
     * @param {UserCouponCreateArgs} args - Arguments to create a UserCoupon.
     * @example
     * // Create one UserCoupon
     * const UserCoupon = await prisma.userCoupon.create({
     *   data: {
     *     // ... data to create a UserCoupon
     *   }
     * })
     * 
     */
    create<T extends UserCouponCreateArgs>(args: SelectSubset<T, UserCouponCreateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCoupons.
     * @param {UserCouponCreateManyArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCouponCreateManyArgs>(args?: SelectSubset<T, UserCouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCoupons and returns the data saved in the database.
     * @param {UserCouponCreateManyAndReturnArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCoupons and only return the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCouponCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCoupon.
     * @param {UserCouponDeleteArgs} args - Arguments to delete one UserCoupon.
     * @example
     * // Delete one UserCoupon
     * const UserCoupon = await prisma.userCoupon.delete({
     *   where: {
     *     // ... filter to delete one UserCoupon
     *   }
     * })
     * 
     */
    delete<T extends UserCouponDeleteArgs>(args: SelectSubset<T, UserCouponDeleteArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCoupon.
     * @param {UserCouponUpdateArgs} args - Arguments to update one UserCoupon.
     * @example
     * // Update one UserCoupon
     * const userCoupon = await prisma.userCoupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCouponUpdateArgs>(args: SelectSubset<T, UserCouponUpdateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCoupons.
     * @param {UserCouponDeleteManyArgs} args - Arguments to filter UserCoupons to delete.
     * @example
     * // Delete a few UserCoupons
     * const { count } = await prisma.userCoupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCouponDeleteManyArgs>(args?: SelectSubset<T, UserCouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCoupons
     * const userCoupon = await prisma.userCoupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCouponUpdateManyArgs>(args: SelectSubset<T, UserCouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCoupon.
     * @param {UserCouponUpsertArgs} args - Arguments to update or create a UserCoupon.
     * @example
     * // Update or create a UserCoupon
     * const userCoupon = await prisma.userCoupon.upsert({
     *   create: {
     *     // ... data to create a UserCoupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCoupon we want to update
     *   }
     * })
     */
    upsert<T extends UserCouponUpsertArgs>(args: SelectSubset<T, UserCouponUpsertArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponCountArgs} args - Arguments to filter UserCoupons to count.
     * @example
     * // Count the number of UserCoupons
     * const count = await prisma.userCoupon.count({
     *   where: {
     *     // ... the filter for the UserCoupons we want to count
     *   }
     * })
    **/
    count<T extends UserCouponCountArgs>(
      args?: Subset<T, UserCouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCouponAggregateArgs>(args: Subset<T, UserCouponAggregateArgs>): Prisma.PrismaPromise<GetUserCouponAggregateType<T>>

    /**
     * Group by UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCouponGroupByArgs['orderBy'] }
        : { orderBy?: UserCouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCoupon model
   */
  readonly fields: UserCouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCoupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCoupon model
   */ 
  interface UserCouponFieldRefs {
    readonly id: FieldRef<"UserCoupon", 'Int'>
    readonly is_redeem: FieldRef<"UserCoupon", 'Boolean'>
    readonly precentage: FieldRef<"UserCoupon", 'Int'>
    readonly created_at: FieldRef<"UserCoupon", 'DateTime'>
    readonly expired_at: FieldRef<"UserCoupon", 'DateTime'>
    readonly customer_id: FieldRef<"UserCoupon", 'Int'>
    readonly updated_at: FieldRef<"UserCoupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCoupon findUnique
   */
  export type UserCouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findUniqueOrThrow
   */
  export type UserCouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findFirst
   */
  export type UserCouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findFirstOrThrow
   */
  export type UserCouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findMany
   */
  export type UserCouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupons to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon create
   */
  export type UserCouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCoupon.
     */
    data: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
  }

  /**
   * UserCoupon createMany
   */
  export type UserCouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCoupon createManyAndReturn
   */
  export type UserCouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCoupon update
   */
  export type UserCouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCoupon.
     */
    data: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
    /**
     * Choose, which UserCoupon to update.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon updateMany
   */
  export type UserCouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCoupons.
     */
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyInput>
    /**
     * Filter which UserCoupons to update
     */
    where?: UserCouponWhereInput
  }

  /**
   * UserCoupon upsert
   */
  export type UserCouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCoupon to update in case it exists.
     */
    where: UserCouponWhereUniqueInput
    /**
     * In case the UserCoupon found by the `where` argument doesn't exist, create a new UserCoupon with this data.
     */
    create: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
    /**
     * In case the UserCoupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
  }

  /**
   * UserCoupon delete
   */
  export type UserCouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter which UserCoupon to delete.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon deleteMany
   */
  export type UserCouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupons to delete
     */
    where?: UserCouponWhereInput
  }

  /**
   * UserCoupon without action
   */
  export type UserCouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
  }


  /**
   * Model UserPoint
   */

  export type AggregateUserPoint = {
    _count: UserPointCountAggregateOutputType | null
    _avg: UserPointAvgAggregateOutputType | null
    _sum: UserPointSumAggregateOutputType | null
    _min: UserPointMinAggregateOutputType | null
    _max: UserPointMaxAggregateOutputType | null
  }

  export type UserPointAvgAggregateOutputType = {
    id: number | null
    point: number | null
    customer_id: number | null
  }

  export type UserPointSumAggregateOutputType = {
    id: number | null
    point: number | null
    customer_id: number | null
  }

  export type UserPointMinAggregateOutputType = {
    id: number | null
    point: number | null
    created_at: Date | null
    expired_at: Date | null
    is_transaction: boolean | null
    customer_id: number | null
  }

  export type UserPointMaxAggregateOutputType = {
    id: number | null
    point: number | null
    created_at: Date | null
    expired_at: Date | null
    is_transaction: boolean | null
    customer_id: number | null
  }

  export type UserPointCountAggregateOutputType = {
    id: number
    point: number
    created_at: number
    expired_at: number
    is_transaction: number
    customer_id: number
    _all: number
  }


  export type UserPointAvgAggregateInputType = {
    id?: true
    point?: true
    customer_id?: true
  }

  export type UserPointSumAggregateInputType = {
    id?: true
    point?: true
    customer_id?: true
  }

  export type UserPointMinAggregateInputType = {
    id?: true
    point?: true
    created_at?: true
    expired_at?: true
    is_transaction?: true
    customer_id?: true
  }

  export type UserPointMaxAggregateInputType = {
    id?: true
    point?: true
    created_at?: true
    expired_at?: true
    is_transaction?: true
    customer_id?: true
  }

  export type UserPointCountAggregateInputType = {
    id?: true
    point?: true
    created_at?: true
    expired_at?: true
    is_transaction?: true
    customer_id?: true
    _all?: true
  }

  export type UserPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoint to aggregate.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPoints
    **/
    _count?: true | UserPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPointMaxAggregateInputType
  }

  export type GetUserPointAggregateType<T extends UserPointAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPoint[P]>
      : GetScalarType<T[P], AggregateUserPoint[P]>
  }




  export type UserPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointWhereInput
    orderBy?: UserPointOrderByWithAggregationInput | UserPointOrderByWithAggregationInput[]
    by: UserPointScalarFieldEnum[] | UserPointScalarFieldEnum
    having?: UserPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPointCountAggregateInputType | true
    _avg?: UserPointAvgAggregateInputType
    _sum?: UserPointSumAggregateInputType
    _min?: UserPointMinAggregateInputType
    _max?: UserPointMaxAggregateInputType
  }

  export type UserPointGroupByOutputType = {
    id: number
    point: number
    created_at: Date
    expired_at: Date | null
    is_transaction: boolean
    customer_id: number
    _count: UserPointCountAggregateOutputType | null
    _avg: UserPointAvgAggregateOutputType | null
    _sum: UserPointSumAggregateOutputType | null
    _min: UserPointMinAggregateOutputType | null
    _max: UserPointMaxAggregateOutputType | null
  }

  type GetUserPointGroupByPayload<T extends UserPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPointGroupByOutputType[P]>
            : GetScalarType<T[P], UserPointGroupByOutputType[P]>
        }
      >
    >


  export type UserPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    created_at?: boolean
    expired_at?: boolean
    is_transaction?: boolean
    customer_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPoint"]>

  export type UserPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    created_at?: boolean
    expired_at?: boolean
    is_transaction?: boolean
    customer_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPoint"]>

  export type UserPointSelectScalar = {
    id?: boolean
    point?: boolean
    created_at?: boolean
    expired_at?: boolean
    is_transaction?: boolean
    customer_id?: boolean
  }

  export type UserPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type UserPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $UserPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPoint"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      point: number
      created_at: Date
      expired_at: Date | null
      is_transaction: boolean
      customer_id: number
    }, ExtArgs["result"]["userPoint"]>
    composites: {}
  }

  type UserPointGetPayload<S extends boolean | null | undefined | UserPointDefaultArgs> = $Result.GetResult<Prisma.$UserPointPayload, S>

  type UserPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPointCountAggregateInputType | true
    }

  export interface UserPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPoint'], meta: { name: 'UserPoint' } }
    /**
     * Find zero or one UserPoint that matches the filter.
     * @param {UserPointFindUniqueArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPointFindUniqueArgs>(args: SelectSubset<T, UserPointFindUniqueArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPoint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPointFindUniqueOrThrowArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPointFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindFirstArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPointFindFirstArgs>(args?: SelectSubset<T, UserPointFindFirstArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindFirstOrThrowArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPointFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPoints
     * const userPoints = await prisma.userPoint.findMany()
     * 
     * // Get first 10 UserPoints
     * const userPoints = await prisma.userPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPointWithIdOnly = await prisma.userPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPointFindManyArgs>(args?: SelectSubset<T, UserPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPoint.
     * @param {UserPointCreateArgs} args - Arguments to create a UserPoint.
     * @example
     * // Create one UserPoint
     * const UserPoint = await prisma.userPoint.create({
     *   data: {
     *     // ... data to create a UserPoint
     *   }
     * })
     * 
     */
    create<T extends UserPointCreateArgs>(args: SelectSubset<T, UserPointCreateArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPoints.
     * @param {UserPointCreateManyArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoint = await prisma.userPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPointCreateManyArgs>(args?: SelectSubset<T, UserPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPoints and returns the data saved in the database.
     * @param {UserPointCreateManyAndReturnArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoint = await prisma.userPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPoints and only return the `id`
     * const userPointWithIdOnly = await prisma.userPoint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPointCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPoint.
     * @param {UserPointDeleteArgs} args - Arguments to delete one UserPoint.
     * @example
     * // Delete one UserPoint
     * const UserPoint = await prisma.userPoint.delete({
     *   where: {
     *     // ... filter to delete one UserPoint
     *   }
     * })
     * 
     */
    delete<T extends UserPointDeleteArgs>(args: SelectSubset<T, UserPointDeleteArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPoint.
     * @param {UserPointUpdateArgs} args - Arguments to update one UserPoint.
     * @example
     * // Update one UserPoint
     * const userPoint = await prisma.userPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPointUpdateArgs>(args: SelectSubset<T, UserPointUpdateArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPoints.
     * @param {UserPointDeleteManyArgs} args - Arguments to filter UserPoints to delete.
     * @example
     * // Delete a few UserPoints
     * const { count } = await prisma.userPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPointDeleteManyArgs>(args?: SelectSubset<T, UserPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPoints
     * const userPoint = await prisma.userPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPointUpdateManyArgs>(args: SelectSubset<T, UserPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPoint.
     * @param {UserPointUpsertArgs} args - Arguments to update or create a UserPoint.
     * @example
     * // Update or create a UserPoint
     * const userPoint = await prisma.userPoint.upsert({
     *   create: {
     *     // ... data to create a UserPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPoint we want to update
     *   }
     * })
     */
    upsert<T extends UserPointUpsertArgs>(args: SelectSubset<T, UserPointUpsertArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointCountArgs} args - Arguments to filter UserPoints to count.
     * @example
     * // Count the number of UserPoints
     * const count = await prisma.userPoint.count({
     *   where: {
     *     // ... the filter for the UserPoints we want to count
     *   }
     * })
    **/
    count<T extends UserPointCountArgs>(
      args?: Subset<T, UserPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPointAggregateArgs>(args: Subset<T, UserPointAggregateArgs>): Prisma.PrismaPromise<GetUserPointAggregateType<T>>

    /**
     * Group by UserPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPointGroupByArgs['orderBy'] }
        : { orderBy?: UserPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPoint model
   */
  readonly fields: UserPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPoint model
   */ 
  interface UserPointFieldRefs {
    readonly id: FieldRef<"UserPoint", 'Int'>
    readonly point: FieldRef<"UserPoint", 'Int'>
    readonly created_at: FieldRef<"UserPoint", 'DateTime'>
    readonly expired_at: FieldRef<"UserPoint", 'DateTime'>
    readonly is_transaction: FieldRef<"UserPoint", 'Boolean'>
    readonly customer_id: FieldRef<"UserPoint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserPoint findUnique
   */
  export type UserPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint findUniqueOrThrow
   */
  export type UserPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint findFirst
   */
  export type UserPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint findFirstOrThrow
   */
  export type UserPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint findMany
   */
  export type UserPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint create
   */
  export type UserPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPoint.
     */
    data: XOR<UserPointCreateInput, UserPointUncheckedCreateInput>
  }

  /**
   * UserPoint createMany
   */
  export type UserPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPoints.
     */
    data: UserPointCreateManyInput | UserPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPoint createManyAndReturn
   */
  export type UserPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPoints.
     */
    data: UserPointCreateManyInput | UserPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPoint update
   */
  export type UserPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPoint.
     */
    data: XOR<UserPointUpdateInput, UserPointUncheckedUpdateInput>
    /**
     * Choose, which UserPoint to update.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint updateMany
   */
  export type UserPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPoints.
     */
    data: XOR<UserPointUpdateManyMutationInput, UserPointUncheckedUpdateManyInput>
    /**
     * Filter which UserPoints to update
     */
    where?: UserPointWhereInput
  }

  /**
   * UserPoint upsert
   */
  export type UserPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPoint to update in case it exists.
     */
    where: UserPointWhereUniqueInput
    /**
     * In case the UserPoint found by the `where` argument doesn't exist, create a new UserPoint with this data.
     */
    create: XOR<UserPointCreateInput, UserPointUncheckedCreateInput>
    /**
     * In case the UserPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPointUpdateInput, UserPointUncheckedUpdateInput>
  }

  /**
   * UserPoint delete
   */
  export type UserPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter which UserPoint to delete.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint deleteMany
   */
  export type UserPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoints to delete
     */
    where?: UserPointWhereInput
  }

  /**
   * UserPoint without action
   */
  export type UserPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsAvgAggregateOutputType = {
    ticket_id: number | null
    order_id: number | null
    quantity: number | null
    subPrice: number | null
  }

  export type OrderDetailsSumAggregateOutputType = {
    ticket_id: number | null
    order_id: number | null
    quantity: number | null
    subPrice: number | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    ticket_id: number | null
    order_id: number | null
    quantity: number | null
    subPrice: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    ticket_id: number | null
    order_id: number | null
    quantity: number | null
    subPrice: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    ticket_id: number
    order_id: number
    quantity: number
    subPrice: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type OrderDetailsAvgAggregateInputType = {
    ticket_id?: true
    order_id?: true
    quantity?: true
    subPrice?: true
  }

  export type OrderDetailsSumAggregateInputType = {
    ticket_id?: true
    order_id?: true
    quantity?: true
    subPrice?: true
  }

  export type OrderDetailsMinAggregateInputType = {
    ticket_id?: true
    order_id?: true
    quantity?: true
    subPrice?: true
    updated_at?: true
    created_at?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    ticket_id?: true
    order_id?: true
    quantity?: true
    subPrice?: true
    updated_at?: true
    created_at?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    ticket_id?: true
    order_id?: true
    quantity?: true
    subPrice?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _avg?: OrderDetailsAvgAggregateInputType
    _sum?: OrderDetailsSumAggregateInputType
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    ticket_id: number
    order_id: number
    quantity: number
    subPrice: number
    updated_at: Date
    created_at: Date
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    order_id?: boolean
    quantity?: boolean
    subPrice?: boolean
    updated_at?: boolean
    created_at?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    order_id?: boolean
    quantity?: boolean
    subPrice?: boolean
    updated_at?: boolean
    created_at?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectScalar = {
    ticket_id?: boolean
    order_id?: boolean
    quantity?: boolean
    subPrice?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type OrderDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_id: number
      order_id: number
      quantity: number
      subPrice: number
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }

  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailsFindUniqueArgs>(args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderDetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailsFindFirstArgs>(args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `ticket_id`
     * const orderDetailsWithTicket_idOnly = await prisma.orderDetails.findMany({ select: { ticket_id: true } })
     * 
     */
    findMany<T extends OrderDetailsFindManyArgs>(args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
     */
    create<T extends OrderDetailsCreateArgs>(args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailsCreateManyArgs>(args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailsCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `ticket_id`
     * const orderDetailsWithTicket_idOnly = await prisma.orderDetails.createManyAndReturn({ 
     *   select: { ticket_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailsDeleteArgs>(args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailsUpdateArgs>(args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailsDeleteManyArgs>(args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailsUpdateManyArgs>(args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailsUpsertArgs>(args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderDetails model
   */ 
  interface OrderDetailsFieldRefs {
    readonly ticket_id: FieldRef<"OrderDetails", 'Int'>
    readonly order_id: FieldRef<"OrderDetails", 'Int'>
    readonly quantity: FieldRef<"OrderDetails", 'Int'>
    readonly subPrice: FieldRef<"OrderDetails", 'Int'>
    readonly updated_at: FieldRef<"OrderDetails", 'DateTime'>
    readonly created_at: FieldRef<"OrderDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }

  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetails createManyAndReturn
   */
  export type OrderDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
  }

  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }

  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
  }

  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    final_price: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    final_price: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    final_price: number | null
    status_order: $Enums.StatusOrder | null
    expires_at: Date | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    final_price: number | null
    status_order: $Enums.StatusOrder | null
    expires_at: Date | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    user_id: number
    total_price: number
    final_price: number
    status_order: number
    expires_at: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    final_price?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    final_price?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    final_price?: true
    status_order?: true
    expires_at?: true
    updated_at?: true
    created_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    final_price?: true
    status_order?: true
    expires_at?: true
    updated_at?: true
    created_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    final_price?: true
    status_order?: true
    expires_at?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    user_id: number
    total_price: number
    final_price: number
    status_order: $Enums.StatusOrder
    expires_at: Date
    updated_at: Date
    created_at: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    final_price?: boolean
    status_order?: boolean
    expires_at?: boolean
    updated_at?: boolean
    created_at?: boolean
    OrderDetails?: boolean | Order$OrderDetailsArgs<ExtArgs>
    user?: boolean | CustomerDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    final_price?: boolean
    status_order?: boolean
    expires_at?: boolean
    updated_at?: boolean
    created_at?: boolean
    user?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    final_price?: boolean
    status_order?: boolean
    expires_at?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderDetails?: boolean | Order$OrderDetailsArgs<ExtArgs>
    user?: boolean | CustomerDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      OrderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
      user: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      total_price: number
      final_price: number
      status_order: $Enums.StatusOrder
      expires_at: Date
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderDetails<T extends Order$OrderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly user_id: FieldRef<"Order", 'Int'>
    readonly total_price: FieldRef<"Order", 'Int'>
    readonly final_price: FieldRef<"Order", 'Int'>
    readonly status_order: FieldRef<"Order", 'StatusOrder'>
    readonly expires_at: FieldRef<"Order", 'DateTime'>
    readonly updated_at: FieldRef<"Order", 'DateTime'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.OrderDetails
   */
  export type Order$OrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    user_id: number | null
    event_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    user_id: number | null
    event_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    description: string | null
    rating: number | null
    user_id: number | null
    event_id: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    description: string | null
    rating: number | null
    user_id: number | null
    event_id: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    description: number
    rating: number
    user_id: number
    event_id: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    user_id?: true
    event_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    user_id?: true
    event_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    description?: true
    rating?: true
    user_id?: true
    event_id?: true
    updated_at?: true
    created_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    description?: true
    rating?: true
    user_id?: true
    event_id?: true
    updated_at?: true
    created_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    description?: true
    rating?: true
    user_id?: true
    event_id?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    description: string
    rating: number
    user_id: number
    event_id: number
    updated_at: Date
    created_at: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    rating?: boolean
    user_id?: boolean
    event_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    user?: boolean | CustomerDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    rating?: boolean
    user_id?: boolean
    event_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    user?: boolean | CustomerDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    description?: boolean
    rating?: boolean
    user_id?: boolean
    event_id?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CustomerDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CustomerDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$CustomerPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      rating: number
      user_id: number
      event_id: number
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly description: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly user_id: FieldRef<"Review", 'Int'>
    readonly event_id: FieldRef<"Review", 'Int'>
    readonly updated_at: FieldRef<"Review", 'DateTime'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Promotor
   */

  export type AggregatePromotor = {
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  export type PromotorAvgAggregateOutputType = {
    id: number | null
  }

  export type PromotorSumAggregateOutputType = {
    id: number | null
  }

  export type PromotorMinAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    is_verify: boolean | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type PromotorMaxAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    is_verify: boolean | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type PromotorCountAggregateOutputType = {
    id: number
    username: number
    name: number
    email: number
    password: number
    avatar: number
    is_verify: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type PromotorAvgAggregateInputType = {
    id?: true
  }

  export type PromotorSumAggregateInputType = {
    id?: true
  }

  export type PromotorMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    is_verify?: true
    updated_at?: true
    created_at?: true
  }

  export type PromotorMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    is_verify?: true
    updated_at?: true
    created_at?: true
  }

  export type PromotorCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    is_verify?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type PromotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotor to aggregate.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotors
    **/
    _count?: true | PromotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotorMaxAggregateInputType
  }

  export type GetPromotorAggregateType<T extends PromotorAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotor[P]>
      : GetScalarType<T[P], AggregatePromotor[P]>
  }




  export type PromotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotorWhereInput
    orderBy?: PromotorOrderByWithAggregationInput | PromotorOrderByWithAggregationInput[]
    by: PromotorScalarFieldEnum[] | PromotorScalarFieldEnum
    having?: PromotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotorCountAggregateInputType | true
    _avg?: PromotorAvgAggregateInputType
    _sum?: PromotorSumAggregateInputType
    _min?: PromotorMinAggregateInputType
    _max?: PromotorMaxAggregateInputType
  }

  export type PromotorGroupByOutputType = {
    id: number
    username: string
    name: string
    email: string
    password: string
    avatar: string | null
    is_verify: boolean
    updated_at: Date | null
    created_at: Date
    _count: PromotorCountAggregateOutputType | null
    _avg: PromotorAvgAggregateOutputType | null
    _sum: PromotorSumAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  type GetPromotorGroupByPayload<T extends PromotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotorGroupByOutputType[P]>
            : GetScalarType<T[P], PromotorGroupByOutputType[P]>
        }
      >
    >


  export type PromotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    is_verify?: boolean
    updated_at?: boolean
    created_at?: boolean
    events?: boolean | Promotor$eventsArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    is_verify?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    is_verify?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type PromotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Promotor$eventsArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotor"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      name: string
      email: string
      password: string
      avatar: string | null
      is_verify: boolean
      updated_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["promotor"]>
    composites: {}
  }

  type PromotorGetPayload<S extends boolean | null | undefined | PromotorDefaultArgs> = $Result.GetResult<Prisma.$PromotorPayload, S>

  type PromotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotorCountAggregateInputType | true
    }

  export interface PromotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotor'], meta: { name: 'Promotor' } }
    /**
     * Find zero or one Promotor that matches the filter.
     * @param {PromotorFindUniqueArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotorFindUniqueArgs>(args: SelectSubset<T, PromotorFindUniqueArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotorFindUniqueOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotorFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotorFindFirstArgs>(args?: SelectSubset<T, PromotorFindFirstArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotorFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotors
     * const promotors = await prisma.promotor.findMany()
     * 
     * // Get first 10 Promotors
     * const promotors = await prisma.promotor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotorWithIdOnly = await prisma.promotor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotorFindManyArgs>(args?: SelectSubset<T, PromotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotor.
     * @param {PromotorCreateArgs} args - Arguments to create a Promotor.
     * @example
     * // Create one Promotor
     * const Promotor = await prisma.promotor.create({
     *   data: {
     *     // ... data to create a Promotor
     *   }
     * })
     * 
     */
    create<T extends PromotorCreateArgs>(args: SelectSubset<T, PromotorCreateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotors.
     * @param {PromotorCreateManyArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotorCreateManyArgs>(args?: SelectSubset<T, PromotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotors and returns the data saved in the database.
     * @param {PromotorCreateManyAndReturnArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotors and only return the `id`
     * const promotorWithIdOnly = await prisma.promotor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotorCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promotor.
     * @param {PromotorDeleteArgs} args - Arguments to delete one Promotor.
     * @example
     * // Delete one Promotor
     * const Promotor = await prisma.promotor.delete({
     *   where: {
     *     // ... filter to delete one Promotor
     *   }
     * })
     * 
     */
    delete<T extends PromotorDeleteArgs>(args: SelectSubset<T, PromotorDeleteArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotor.
     * @param {PromotorUpdateArgs} args - Arguments to update one Promotor.
     * @example
     * // Update one Promotor
     * const promotor = await prisma.promotor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotorUpdateArgs>(args: SelectSubset<T, PromotorUpdateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotors.
     * @param {PromotorDeleteManyArgs} args - Arguments to filter Promotors to delete.
     * @example
     * // Delete a few Promotors
     * const { count } = await prisma.promotor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotorDeleteManyArgs>(args?: SelectSubset<T, PromotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotors
     * const promotor = await prisma.promotor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotorUpdateManyArgs>(args: SelectSubset<T, PromotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotor.
     * @param {PromotorUpsertArgs} args - Arguments to update or create a Promotor.
     * @example
     * // Update or create a Promotor
     * const promotor = await prisma.promotor.upsert({
     *   create: {
     *     // ... data to create a Promotor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotor we want to update
     *   }
     * })
     */
    upsert<T extends PromotorUpsertArgs>(args: SelectSubset<T, PromotorUpsertArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorCountArgs} args - Arguments to filter Promotors to count.
     * @example
     * // Count the number of Promotors
     * const count = await prisma.promotor.count({
     *   where: {
     *     // ... the filter for the Promotors we want to count
     *   }
     * })
    **/
    count<T extends PromotorCountArgs>(
      args?: Subset<T, PromotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotorAggregateArgs>(args: Subset<T, PromotorAggregateArgs>): Prisma.PrismaPromise<GetPromotorAggregateType<T>>

    /**
     * Group by Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotorGroupByArgs['orderBy'] }
        : { orderBy?: PromotorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotor model
   */
  readonly fields: PromotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Promotor$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotor model
   */ 
  interface PromotorFieldRefs {
    readonly id: FieldRef<"Promotor", 'Int'>
    readonly username: FieldRef<"Promotor", 'String'>
    readonly name: FieldRef<"Promotor", 'String'>
    readonly email: FieldRef<"Promotor", 'String'>
    readonly password: FieldRef<"Promotor", 'String'>
    readonly avatar: FieldRef<"Promotor", 'String'>
    readonly is_verify: FieldRef<"Promotor", 'Boolean'>
    readonly updated_at: FieldRef<"Promotor", 'DateTime'>
    readonly created_at: FieldRef<"Promotor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotor findUnique
   */
  export type PromotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findUniqueOrThrow
   */
  export type PromotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findFirst
   */
  export type PromotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findFirstOrThrow
   */
  export type PromotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findMany
   */
  export type PromotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotors to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor create
   */
  export type PromotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotor.
     */
    data: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
  }

  /**
   * Promotor createMany
   */
  export type PromotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor createManyAndReturn
   */
  export type PromotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor update
   */
  export type PromotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotor.
     */
    data: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
    /**
     * Choose, which Promotor to update.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor updateMany
   */
  export type PromotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotors.
     */
    data: XOR<PromotorUpdateManyMutationInput, PromotorUncheckedUpdateManyInput>
    /**
     * Filter which Promotors to update
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor upsert
   */
  export type PromotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotor to update in case it exists.
     */
    where: PromotorWhereUniqueInput
    /**
     * In case the Promotor found by the `where` argument doesn't exist, create a new Promotor with this data.
     */
    create: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
    /**
     * In case the Promotor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
  }

  /**
   * Promotor delete
   */
  export type PromotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter which Promotor to delete.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor deleteMany
   */
  export type PromotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotors to delete
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor.events
   */
  export type Promotor$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Promotor without action
   */
  export type PromotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    promotor_id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    promotor_id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    category: $Enums.Category | null
    location: $Enums.Location | null
    venue: string | null
    thumbnail: string | null
    datetime: Date | null
    promotor_id: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    category: $Enums.Category | null
    location: $Enums.Location | null
    venue: string | null
    thumbnail: string | null
    datetime: Date | null
    promotor_id: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    category: number
    location: number
    venue: number
    thumbnail: number
    datetime: number
    promotor_id: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    promotor_id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    promotor_id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    category?: true
    location?: true
    venue?: true
    thumbnail?: true
    datetime?: true
    promotor_id?: true
    updated_at?: true
    created_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    category?: true
    location?: true
    venue?: true
    thumbnail?: true
    datetime?: true
    promotor_id?: true
    updated_at?: true
    created_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    category?: true
    location?: true
    venue?: true
    thumbnail?: true
    datetime?: true
    promotor_id?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    slug: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail: string | null
    datetime: Date
    promotor_id: number
    updated_at: Date
    created_at: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    thumbnail?: boolean
    datetime?: boolean
    promotor_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    Review?: boolean | Event$ReviewArgs<ExtArgs>
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    thumbnail?: boolean
    datetime?: boolean
    promotor_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    thumbnail?: boolean
    datetime?: boolean
    promotor_id?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    Review?: boolean | Event$ReviewArgs<ExtArgs>
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | PromotorDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      promotor: Prisma.$PromotorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      description: string
      category: $Enums.Category
      location: $Enums.Location
      venue: string
      thumbnail: string | null
      datetime: Date
      promotor_id: number
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Event$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    Review<T extends Event$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Event$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    promotor<T extends PromotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotorDefaultArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'Category'>
    readonly location: FieldRef<"Event", 'Location'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly thumbnail: FieldRef<"Event", 'String'>
    readonly datetime: FieldRef<"Event", 'DateTime'>
    readonly promotor_id: FieldRef<"Event", 'Int'>
    readonly updated_at: FieldRef<"Event", 'DateTime'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.tickets
   */
  export type Event$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.Review
   */
  export type Event$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    seats: number | null
    maxSeats: number | null
    price: number | null
    event_id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    seats: number | null
    maxSeats: number | null
    price: number | null
    event_id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    category: $Enums.TicketCategory | null
    description: string | null
    seats: number | null
    maxSeats: number | null
    price: number | null
    event_id: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    category: $Enums.TicketCategory | null
    description: string | null
    seats: number | null
    maxSeats: number | null
    price: number | null
    event_id: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    category: number
    description: number
    seats: number
    maxSeats: number
    price: number
    event_id: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    seats?: true
    maxSeats?: true
    price?: true
    event_id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    seats?: true
    maxSeats?: true
    price?: true
    event_id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    category?: true
    description?: true
    seats?: true
    maxSeats?: true
    price?: true
    event_id?: true
    updated_at?: true
    created_at?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    category?: true
    description?: true
    seats?: true
    maxSeats?: true
    price?: true
    event_id?: true
    updated_at?: true
    created_at?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    category?: true
    description?: true
    seats?: true
    maxSeats?: true
    price?: true
    event_id?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    category: $Enums.TicketCategory
    description: string
    seats: number
    maxSeats: number
    price: number
    event_id: number
    updated_at: Date
    created_at: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    seats?: boolean
    maxSeats?: boolean
    price?: boolean
    event_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    OrderDetails?: boolean | Ticket$OrderDetailsArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    seats?: boolean
    maxSeats?: boolean
    price?: boolean
    event_id?: boolean
    updated_at?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    category?: boolean
    description?: boolean
    seats?: boolean
    maxSeats?: boolean
    price?: boolean
    event_id?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderDetails?: boolean | Ticket$OrderDetailsArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      OrderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: $Enums.TicketCategory
      description: string
      seats: number
      maxSeats: number
      price: number
      event_id: number
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderDetails<T extends Ticket$OrderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$OrderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany"> | Null>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly category: FieldRef<"Ticket", 'TicketCategory'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly seats: FieldRef<"Ticket", 'Int'>
    readonly maxSeats: FieldRef<"Ticket", 'Int'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly event_id: FieldRef<"Ticket", 'Int'>
    readonly updated_at: FieldRef<"Ticket", 'DateTime'>
    readonly created_at: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.OrderDetails
   */
  export type Ticket$OrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify',
    ref_code: 'ref_code',
    referred_code: 'referred_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const UserCouponScalarFieldEnum: {
    id: 'id',
    is_redeem: 'is_redeem',
    precentage: 'precentage',
    created_at: 'created_at',
    expired_at: 'expired_at',
    customer_id: 'customer_id',
    updated_at: 'updated_at'
  };

  export type UserCouponScalarFieldEnum = (typeof UserCouponScalarFieldEnum)[keyof typeof UserCouponScalarFieldEnum]


  export const UserPointScalarFieldEnum: {
    id: 'id',
    point: 'point',
    created_at: 'created_at',
    expired_at: 'expired_at',
    is_transaction: 'is_transaction',
    customer_id: 'customer_id'
  };

  export type UserPointScalarFieldEnum = (typeof UserPointScalarFieldEnum)[keyof typeof UserPointScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    ticket_id: 'ticket_id',
    order_id: 'order_id',
    quantity: 'quantity',
    subPrice: 'subPrice',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total_price: 'total_price',
    final_price: 'final_price',
    status_order: 'status_order',
    expires_at: 'expires_at',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    description: 'description',
    rating: 'rating',
    user_id: 'user_id',
    event_id: 'event_id',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PromotorScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    is_verify: 'is_verify',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type PromotorScalarFieldEnum = (typeof PromotorScalarFieldEnum)[keyof typeof PromotorScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    category: 'category',
    location: 'location',
    venue: 'venue',
    thumbnail: 'thumbnail',
    datetime: 'datetime',
    promotor_id: 'promotor_id',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    category: 'category',
    description: 'description',
    seats: 'seats',
    maxSeats: 'maxSeats',
    price: 'price',
    event_id: 'event_id',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusOrder'
   */
  export type EnumStatusOrderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusOrder'>
    


  /**
   * Reference to a field of type 'StatusOrder[]'
   */
  export type ListEnumStatusOrderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusOrder[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Location'
   */
  export type EnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location'>
    


  /**
   * Reference to a field of type 'Location[]'
   */
  export type ListEnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location[]'>
    


  /**
   * Reference to a field of type 'TicketCategory'
   */
  export type EnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory'>
    


  /**
   * Reference to a field of type 'TicketCategory[]'
   */
  export type ListEnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    username?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    avatar?: StringNullableFilter<"Customer"> | string | null
    isVerify?: BoolFilter<"Customer"> | boolean
    ref_code?: StringNullableFilter<"Customer"> | string | null
    referred_code?: StringNullableFilter<"Customer"> | string | null
    created_at?: DateTimeFilter<"Customer"> | Date | string
    updated_at?: DateTimeNullableFilter<"Customer"> | Date | string | null
    UserCoupon?: UserCouponListRelationFilter
    UserPoint?: UserPointListRelationFilter
    Order?: OrderListRelationFilter
    Review?: ReviewListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrderInput | SortOrder
    referred_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    UserCoupon?: UserCouponOrderByRelationAggregateInput
    UserPoint?: UserPointOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    password?: StringFilter<"Customer"> | string
    avatar?: StringNullableFilter<"Customer"> | string | null
    isVerify?: BoolFilter<"Customer"> | boolean
    ref_code?: StringNullableFilter<"Customer"> | string | null
    referred_code?: StringNullableFilter<"Customer"> | string | null
    created_at?: DateTimeFilter<"Customer"> | Date | string
    updated_at?: DateTimeNullableFilter<"Customer"> | Date | string | null
    UserCoupon?: UserCouponListRelationFilter
    UserPoint?: UserPointListRelationFilter
    Order?: OrderListRelationFilter
    Review?: ReviewListRelationFilter
  }, "id" | "username" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrderInput | SortOrder
    referred_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    username?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    password?: StringWithAggregatesFilter<"Customer"> | string
    avatar?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isVerify?: BoolWithAggregatesFilter<"Customer"> | boolean
    ref_code?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    referred_code?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
  }

  export type UserCouponWhereInput = {
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    id?: IntFilter<"UserCoupon"> | number
    is_redeem?: BoolFilter<"UserCoupon"> | boolean
    precentage?: IntFilter<"UserCoupon"> | number
    created_at?: DateTimeFilter<"UserCoupon"> | Date | string
    expired_at?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    customer_id?: IntFilter<"UserCoupon"> | number
    updated_at?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type UserCouponOrderByWithRelationInput = {
    id?: SortOrder
    is_redeem?: SortOrder
    precentage?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    customer_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type UserCouponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    is_redeem?: BoolFilter<"UserCoupon"> | boolean
    precentage?: IntFilter<"UserCoupon"> | number
    created_at?: DateTimeFilter<"UserCoupon"> | Date | string
    expired_at?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    customer_id?: IntFilter<"UserCoupon"> | number
    updated_at?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type UserCouponOrderByWithAggregationInput = {
    id?: SortOrder
    is_redeem?: SortOrder
    precentage?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    customer_id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserCouponCountOrderByAggregateInput
    _avg?: UserCouponAvgOrderByAggregateInput
    _max?: UserCouponMaxOrderByAggregateInput
    _min?: UserCouponMinOrderByAggregateInput
    _sum?: UserCouponSumOrderByAggregateInput
  }

  export type UserCouponScalarWhereWithAggregatesInput = {
    AND?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    OR?: UserCouponScalarWhereWithAggregatesInput[]
    NOT?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCoupon"> | number
    is_redeem?: BoolWithAggregatesFilter<"UserCoupon"> | boolean
    precentage?: IntWithAggregatesFilter<"UserCoupon"> | number
    created_at?: DateTimeWithAggregatesFilter<"UserCoupon"> | Date | string
    expired_at?: DateTimeNullableWithAggregatesFilter<"UserCoupon"> | Date | string | null
    customer_id?: IntWithAggregatesFilter<"UserCoupon"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"UserCoupon"> | Date | string | null
  }

  export type UserPointWhereInput = {
    AND?: UserPointWhereInput | UserPointWhereInput[]
    OR?: UserPointWhereInput[]
    NOT?: UserPointWhereInput | UserPointWhereInput[]
    id?: IntFilter<"UserPoint"> | number
    point?: IntFilter<"UserPoint"> | number
    created_at?: DateTimeFilter<"UserPoint"> | Date | string
    expired_at?: DateTimeNullableFilter<"UserPoint"> | Date | string | null
    is_transaction?: BoolFilter<"UserPoint"> | boolean
    customer_id?: IntFilter<"UserPoint"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type UserPointOrderByWithRelationInput = {
    id?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    is_transaction?: SortOrder
    customer_id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type UserPointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserPointWhereInput | UserPointWhereInput[]
    OR?: UserPointWhereInput[]
    NOT?: UserPointWhereInput | UserPointWhereInput[]
    point?: IntFilter<"UserPoint"> | number
    created_at?: DateTimeFilter<"UserPoint"> | Date | string
    expired_at?: DateTimeNullableFilter<"UserPoint"> | Date | string | null
    is_transaction?: BoolFilter<"UserPoint"> | boolean
    customer_id?: IntFilter<"UserPoint"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type UserPointOrderByWithAggregationInput = {
    id?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    is_transaction?: SortOrder
    customer_id?: SortOrder
    _count?: UserPointCountOrderByAggregateInput
    _avg?: UserPointAvgOrderByAggregateInput
    _max?: UserPointMaxOrderByAggregateInput
    _min?: UserPointMinOrderByAggregateInput
    _sum?: UserPointSumOrderByAggregateInput
  }

  export type UserPointScalarWhereWithAggregatesInput = {
    AND?: UserPointScalarWhereWithAggregatesInput | UserPointScalarWhereWithAggregatesInput[]
    OR?: UserPointScalarWhereWithAggregatesInput[]
    NOT?: UserPointScalarWhereWithAggregatesInput | UserPointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPoint"> | number
    point?: IntWithAggregatesFilter<"UserPoint"> | number
    created_at?: DateTimeWithAggregatesFilter<"UserPoint"> | Date | string
    expired_at?: DateTimeNullableWithAggregatesFilter<"UserPoint"> | Date | string | null
    is_transaction?: BoolWithAggregatesFilter<"UserPoint"> | boolean
    customer_id?: IntWithAggregatesFilter<"UserPoint"> | number
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    ticket_id?: IntFilter<"OrderDetails"> | number
    order_id?: IntFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    subPrice?: IntFilter<"OrderDetails"> | number
    updated_at?: DateTimeFilter<"OrderDetails"> | Date | string
    created_at?: DateTimeFilter<"OrderDetails"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type OrderDetailsOrderByWithRelationInput = {
    ticket_id?: SortOrder
    order_id?: SortOrder
    quantity?: SortOrder
    subPrice?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    order?: OrderOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    ticket_id_order_id?: OrderDetailsTicket_idOrder_idCompoundUniqueInput
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    ticket_id?: IntFilter<"OrderDetails"> | number
    order_id?: IntFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    subPrice?: IntFilter<"OrderDetails"> | number
    updated_at?: DateTimeFilter<"OrderDetails"> | Date | string
    created_at?: DateTimeFilter<"OrderDetails"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "ticket_id_order_id">

  export type OrderDetailsOrderByWithAggregationInput = {
    ticket_id?: SortOrder
    order_id?: SortOrder
    quantity?: SortOrder
    subPrice?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _avg?: OrderDetailsAvgOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
    _sum?: OrderDetailsSumOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    ticket_id?: IntWithAggregatesFilter<"OrderDetails"> | number
    order_id?: IntWithAggregatesFilter<"OrderDetails"> | number
    quantity?: IntWithAggregatesFilter<"OrderDetails"> | number
    subPrice?: IntWithAggregatesFilter<"OrderDetails"> | number
    updated_at?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    total_price?: IntFilter<"Order"> | number
    final_price?: IntFilter<"Order"> | number
    status_order?: EnumStatusOrderFilter<"Order"> | $Enums.StatusOrder
    expires_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    created_at?: DateTimeFilter<"Order"> | Date | string
    OrderDetails?: OrderDetailsListRelationFilter
    user?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status_order?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    OrderDetails?: OrderDetailsOrderByRelationAggregateInput
    user?: CustomerOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    user_id?: IntFilter<"Order"> | number
    total_price?: IntFilter<"Order"> | number
    final_price?: IntFilter<"Order"> | number
    status_order?: EnumStatusOrderFilter<"Order"> | $Enums.StatusOrder
    expires_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    created_at?: DateTimeFilter<"Order"> | Date | string
    OrderDetails?: OrderDetailsListRelationFilter
    user?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status_order?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    user_id?: IntWithAggregatesFilter<"Order"> | number
    total_price?: IntWithAggregatesFilter<"Order"> | number
    final_price?: IntWithAggregatesFilter<"Order"> | number
    status_order?: EnumStatusOrderWithAggregatesFilter<"Order"> | $Enums.StatusOrder
    expires_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    description?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    event_id?: IntFilter<"Review"> | number
    updated_at?: DateTimeFilter<"Review"> | Date | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    user?: CustomerOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    description?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    event_id?: IntFilter<"Review"> | number
    updated_at?: DateTimeFilter<"Review"> | Date | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    description?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    user_id?: IntWithAggregatesFilter<"Review"> | number
    event_id?: IntWithAggregatesFilter<"Review"> | number
    updated_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type PromotorWhereInput = {
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    id?: IntFilter<"Promotor"> | number
    username?: StringFilter<"Promotor"> | string
    name?: StringFilter<"Promotor"> | string
    email?: StringFilter<"Promotor"> | string
    password?: StringFilter<"Promotor"> | string
    avatar?: StringNullableFilter<"Promotor"> | string | null
    is_verify?: BoolFilter<"Promotor"> | boolean
    updated_at?: DateTimeNullableFilter<"Promotor"> | Date | string | null
    created_at?: DateTimeFilter<"Promotor"> | Date | string
    events?: EventListRelationFilter
  }

  export type PromotorOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    is_verify?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    events?: EventOrderByRelationAggregateInput
  }

  export type PromotorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    name?: StringFilter<"Promotor"> | string
    password?: StringFilter<"Promotor"> | string
    avatar?: StringNullableFilter<"Promotor"> | string | null
    is_verify?: BoolFilter<"Promotor"> | boolean
    updated_at?: DateTimeNullableFilter<"Promotor"> | Date | string | null
    created_at?: DateTimeFilter<"Promotor"> | Date | string
    events?: EventListRelationFilter
  }, "id" | "username" | "email">

  export type PromotorOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    is_verify?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PromotorCountOrderByAggregateInput
    _avg?: PromotorAvgOrderByAggregateInput
    _max?: PromotorMaxOrderByAggregateInput
    _min?: PromotorMinOrderByAggregateInput
    _sum?: PromotorSumOrderByAggregateInput
  }

  export type PromotorScalarWhereWithAggregatesInput = {
    AND?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    OR?: PromotorScalarWhereWithAggregatesInput[]
    NOT?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promotor"> | number
    username?: StringWithAggregatesFilter<"Promotor"> | string
    name?: StringWithAggregatesFilter<"Promotor"> | string
    email?: StringWithAggregatesFilter<"Promotor"> | string
    password?: StringWithAggregatesFilter<"Promotor"> | string
    avatar?: StringNullableWithAggregatesFilter<"Promotor"> | string | null
    is_verify?: BoolWithAggregatesFilter<"Promotor"> | boolean
    updated_at?: DateTimeNullableWithAggregatesFilter<"Promotor"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Promotor"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    thumbnail?: StringNullableFilter<"Event"> | string | null
    datetime?: DateTimeFilter<"Event"> | Date | string
    promotor_id?: IntFilter<"Event"> | number
    updated_at?: DateTimeFilter<"Event"> | Date | string
    created_at?: DateTimeFilter<"Event"> | Date | string
    tickets?: TicketListRelationFilter
    Review?: ReviewListRelationFilter
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    datetime?: SortOrder
    promotor_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    promotor?: PromotorOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    thumbnail?: StringNullableFilter<"Event"> | string | null
    datetime?: DateTimeFilter<"Event"> | Date | string
    promotor_id?: IntFilter<"Event"> | number
    updated_at?: DateTimeFilter<"Event"> | Date | string
    created_at?: DateTimeFilter<"Event"> | Date | string
    tickets?: TicketListRelationFilter
    Review?: ReviewListRelationFilter
    promotor?: XOR<PromotorScalarRelationFilter, PromotorWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    datetime?: SortOrder
    promotor_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    slug?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    category?: EnumCategoryWithAggregatesFilter<"Event"> | $Enums.Category
    location?: EnumLocationWithAggregatesFilter<"Event"> | $Enums.Location
    venue?: StringWithAggregatesFilter<"Event"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Event"> | string | null
    datetime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    promotor_id?: IntWithAggregatesFilter<"Event"> | number
    updated_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringFilter<"Ticket"> | string
    seats?: IntFilter<"Ticket"> | number
    maxSeats?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    event_id?: IntFilter<"Ticket"> | number
    updated_at?: DateTimeFilter<"Ticket"> | Date | string
    created_at?: DateTimeFilter<"Ticket"> | Date | string
    OrderDetails?: OrderDetailsListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    maxSeats?: SortOrder
    price?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    OrderDetails?: OrderDetailsOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringFilter<"Ticket"> | string
    seats?: IntFilter<"Ticket"> | number
    maxSeats?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    event_id?: IntFilter<"Ticket"> | number
    updated_at?: DateTimeFilter<"Ticket"> | Date | string
    created_at?: DateTimeFilter<"Ticket"> | Date | string
    OrderDetails?: OrderDetailsListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    maxSeats?: SortOrder
    price?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    category?: EnumTicketCategoryWithAggregatesFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringWithAggregatesFilter<"Ticket"> | string
    seats?: IntWithAggregatesFilter<"Ticket"> | number
    maxSeats?: IntWithAggregatesFilter<"Ticket"> | number
    price?: IntWithAggregatesFilter<"Ticket"> | number
    event_id?: IntWithAggregatesFilter<"Ticket"> | number
    updated_at?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type CustomerCreateInput = {
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponCreateNestedManyWithoutCustomerInput
    UserPoint?: UserPointCreateNestedManyWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponUncheckedCreateNestedManyWithoutCustomerInput
    UserPoint?: UserPointUncheckedCreateNestedManyWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type CustomerUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUpdateManyWithoutCustomerNestedInput
    UserPoint?: UserPointUpdateManyWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUncheckedUpdateManyWithoutCustomerNestedInput
    UserPoint?: UserPointUncheckedUpdateManyWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CustomerUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCouponCreateInput = {
    is_redeem?: boolean
    precentage: number
    created_at?: Date | string
    expired_at?: Date | string | null
    updated_at?: Date | string | null
    customer: CustomerCreateNestedOneWithoutUserCouponInput
  }

  export type UserCouponUncheckedCreateInput = {
    id?: number
    is_redeem?: boolean
    precentage: number
    created_at?: Date | string
    expired_at?: Date | string | null
    customer_id: number
    updated_at?: Date | string | null
  }

  export type UserCouponUpdateInput = {
    is_redeem?: BoolFieldUpdateOperationsInput | boolean
    precentage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutUserCouponNestedInput
  }

  export type UserCouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_redeem?: BoolFieldUpdateOperationsInput | boolean
    precentage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCouponCreateManyInput = {
    id?: number
    is_redeem?: boolean
    precentage: number
    created_at?: Date | string
    expired_at?: Date | string | null
    customer_id: number
    updated_at?: Date | string | null
  }

  export type UserCouponUpdateManyMutationInput = {
    is_redeem?: BoolFieldUpdateOperationsInput | boolean
    precentage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_redeem?: BoolFieldUpdateOperationsInput | boolean
    precentage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointCreateInput = {
    point: number
    created_at?: Date | string
    expired_at?: Date | string | null
    is_transaction?: boolean
    customer: CustomerCreateNestedOneWithoutUserPointInput
  }

  export type UserPointUncheckedCreateInput = {
    id?: number
    point: number
    created_at?: Date | string
    expired_at?: Date | string | null
    is_transaction?: boolean
    customer_id: number
  }

  export type UserPointUpdateInput = {
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_transaction?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateOneRequiredWithoutUserPointNestedInput
  }

  export type UserPointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_transaction?: BoolFieldUpdateOperationsInput | boolean
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserPointCreateManyInput = {
    id?: number
    point: number
    created_at?: Date | string
    expired_at?: Date | string | null
    is_transaction?: boolean
    customer_id: number
  }

  export type UserPointUpdateManyMutationInput = {
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_transaction?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_transaction?: BoolFieldUpdateOperationsInput | boolean
    customer_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsCreateInput = {
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
    order: OrderCreateNestedOneWithoutOrderDetailsInput
    ticket: TicketCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    ticket_id: number
    order_id: number
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderDetailsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderDetailsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateManyInput = {
    ticket_id: number
    order_id: number
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderDetailsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
    user: CustomerCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    user_id: number
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
    user?: CustomerUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    user_id: number
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    description: string
    rating?: number
    updated_at?: Date | string
    created_at?: Date | string
    user: CustomerCreateNestedOneWithoutReviewInput
    event: EventCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    description: string
    rating?: number
    user_id: number
    event_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type ReviewUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: CustomerUpdateOneRequiredWithoutReviewNestedInput
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    description: string
    rating?: number
    user_id: number
    event_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorCreateInput = {
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    is_verify?: boolean
    updated_at?: Date | string | null
    created_at?: Date | string
    events?: EventCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    is_verify?: boolean
    updated_at?: Date | string | null
    created_at?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorCreateManyInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    is_verify?: boolean
    updated_at?: Date | string | null
    created_at?: Date | string
  }

  export type PromotorUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    tickets?: TicketCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    promotor: PromotorCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    promotor_id: number
    updated_at?: Date | string
    created_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    promotor?: PromotorUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    promotor_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsCreateNestedManyWithoutTicketInput
    event: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    event_id: number
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUpdateManyWithoutTicketNestedInput
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    event_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserCouponListRelationFilter = {
    every?: UserCouponWhereInput
    some?: UserCouponWhereInput
    none?: UserCouponWhereInput
  }

  export type UserPointListRelationFilter = {
    every?: UserPointWhereInput
    some?: UserPointWhereInput
    none?: UserPointWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    referred_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    referred_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    referred_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type UserCouponCountOrderByAggregateInput = {
    id?: SortOrder
    is_redeem?: SortOrder
    precentage?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrder
    customer_id?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCouponAvgOrderByAggregateInput = {
    id?: SortOrder
    precentage?: SortOrder
    customer_id?: SortOrder
  }

  export type UserCouponMaxOrderByAggregateInput = {
    id?: SortOrder
    is_redeem?: SortOrder
    precentage?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrder
    customer_id?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCouponMinOrderByAggregateInput = {
    id?: SortOrder
    is_redeem?: SortOrder
    precentage?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrder
    customer_id?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCouponSumOrderByAggregateInput = {
    id?: SortOrder
    precentage?: SortOrder
    customer_id?: SortOrder
  }

  export type UserPointCountOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrder
    is_transaction?: SortOrder
    customer_id?: SortOrder
  }

  export type UserPointAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    customer_id?: SortOrder
  }

  export type UserPointMaxOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrder
    is_transaction?: SortOrder
    customer_id?: SortOrder
  }

  export type UserPointMinOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    expired_at?: SortOrder
    is_transaction?: SortOrder
    customer_id?: SortOrder
  }

  export type UserPointSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    customer_id?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type OrderDetailsTicket_idOrder_idCompoundUniqueInput = {
    ticket_id: number
    order_id: number
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    ticket_id?: SortOrder
    order_id?: SortOrder
    quantity?: SortOrder
    subPrice?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type OrderDetailsAvgOrderByAggregateInput = {
    ticket_id?: SortOrder
    order_id?: SortOrder
    quantity?: SortOrder
    subPrice?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    ticket_id?: SortOrder
    order_id?: SortOrder
    quantity?: SortOrder
    subPrice?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    ticket_id?: SortOrder
    order_id?: SortOrder
    quantity?: SortOrder
    subPrice?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type OrderDetailsSumOrderByAggregateInput = {
    ticket_id?: SortOrder
    order_id?: SortOrder
    quantity?: SortOrder
    subPrice?: SortOrder
  }

  export type EnumStatusOrderFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrder | EnumStatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrderFilter<$PrismaModel> | $Enums.StatusOrder
  }

  export type OrderDetailsListRelationFilter = {
    every?: OrderDetailsWhereInput
    some?: OrderDetailsWhereInput
    none?: OrderDetailsWhereInput
  }

  export type OrderDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status_order?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status_order?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status_order?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
  }

  export type EnumStatusOrderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrder | EnumStatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrderWithAggregatesFilter<$PrismaModel> | $Enums.StatusOrder
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusOrderFilter<$PrismaModel>
    _max?: NestedEnumStatusOrderFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotorCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    is_verify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type PromotorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromotorMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    is_verify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type PromotorMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    is_verify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type PromotorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type PromotorScalarRelationFilter = {
    is?: PromotorWhereInput
    isNot?: PromotorWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    thumbnail?: SortOrder
    datetime?: SortOrder
    promotor_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    promotor_id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    thumbnail?: SortOrder
    datetime?: SortOrder
    promotor_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    thumbnail?: SortOrder
    datetime?: SortOrder
    promotor_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    promotor_id?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type EnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    maxSeats?: SortOrder
    price?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    seats?: SortOrder
    maxSeats?: SortOrder
    price?: SortOrder
    event_id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    maxSeats?: SortOrder
    price?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    maxSeats?: SortOrder
    price?: SortOrder
    event_id?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    seats?: SortOrder
    maxSeats?: SortOrder
    price?: SortOrder
    event_id?: SortOrder
  }

  export type EnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type UserCouponCreateNestedManyWithoutCustomerInput = {
    create?: XOR<UserCouponCreateWithoutCustomerInput, UserCouponUncheckedCreateWithoutCustomerInput> | UserCouponCreateWithoutCustomerInput[] | UserCouponUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCustomerInput | UserCouponCreateOrConnectWithoutCustomerInput[]
    createMany?: UserCouponCreateManyCustomerInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type UserPointCreateNestedManyWithoutCustomerInput = {
    create?: XOR<UserPointCreateWithoutCustomerInput, UserPointUncheckedCreateWithoutCustomerInput> | UserPointCreateWithoutCustomerInput[] | UserPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutCustomerInput | UserPointCreateOrConnectWithoutCustomerInput[]
    createMany?: UserPointCreateManyCustomerInputEnvelope
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserCouponUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<UserCouponCreateWithoutCustomerInput, UserCouponUncheckedCreateWithoutCustomerInput> | UserCouponCreateWithoutCustomerInput[] | UserCouponUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCustomerInput | UserCouponCreateOrConnectWithoutCustomerInput[]
    createMany?: UserCouponCreateManyCustomerInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type UserPointUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<UserPointCreateWithoutCustomerInput, UserPointUncheckedCreateWithoutCustomerInput> | UserPointCreateWithoutCustomerInput[] | UserPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutCustomerInput | UserPointCreateOrConnectWithoutCustomerInput[]
    createMany?: UserPointCreateManyCustomerInputEnvelope
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserCouponUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<UserCouponCreateWithoutCustomerInput, UserCouponUncheckedCreateWithoutCustomerInput> | UserCouponCreateWithoutCustomerInput[] | UserCouponUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCustomerInput | UserCouponCreateOrConnectWithoutCustomerInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutCustomerInput | UserCouponUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: UserCouponCreateManyCustomerInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutCustomerInput | UserCouponUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutCustomerInput | UserCouponUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type UserPointUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<UserPointCreateWithoutCustomerInput, UserPointUncheckedCreateWithoutCustomerInput> | UserPointCreateWithoutCustomerInput[] | UserPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutCustomerInput | UserPointCreateOrConnectWithoutCustomerInput[]
    upsert?: UserPointUpsertWithWhereUniqueWithoutCustomerInput | UserPointUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: UserPointCreateManyCustomerInputEnvelope
    set?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    disconnect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    delete?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    update?: UserPointUpdateWithWhereUniqueWithoutCustomerInput | UserPointUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: UserPointUpdateManyWithWhereWithoutCustomerInput | UserPointUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCouponUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<UserCouponCreateWithoutCustomerInput, UserCouponUncheckedCreateWithoutCustomerInput> | UserCouponCreateWithoutCustomerInput[] | UserCouponUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCustomerInput | UserCouponCreateOrConnectWithoutCustomerInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutCustomerInput | UserCouponUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: UserCouponCreateManyCustomerInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutCustomerInput | UserCouponUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutCustomerInput | UserCouponUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type UserPointUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<UserPointCreateWithoutCustomerInput, UserPointUncheckedCreateWithoutCustomerInput> | UserPointCreateWithoutCustomerInput[] | UserPointUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutCustomerInput | UserPointCreateOrConnectWithoutCustomerInput[]
    upsert?: UserPointUpsertWithWhereUniqueWithoutCustomerInput | UserPointUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: UserPointCreateManyCustomerInputEnvelope
    set?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    disconnect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    delete?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    update?: UserPointUpdateWithWhereUniqueWithoutCustomerInput | UserPointUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: UserPointUpdateManyWithWhereWithoutCustomerInput | UserPointUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutUserCouponInput = {
    create?: XOR<CustomerCreateWithoutUserCouponInput, CustomerUncheckedCreateWithoutUserCouponInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserCouponInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutUserCouponNestedInput = {
    create?: XOR<CustomerCreateWithoutUserCouponInput, CustomerUncheckedCreateWithoutUserCouponInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserCouponInput
    upsert?: CustomerUpsertWithoutUserCouponInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserCouponInput, CustomerUpdateWithoutUserCouponInput>, CustomerUncheckedUpdateWithoutUserCouponInput>
  }

  export type CustomerCreateNestedOneWithoutUserPointInput = {
    create?: XOR<CustomerCreateWithoutUserPointInput, CustomerUncheckedCreateWithoutUserPointInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserPointInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutUserPointNestedInput = {
    create?: XOR<CustomerCreateWithoutUserPointInput, CustomerUncheckedCreateWithoutUserPointInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserPointInput
    upsert?: CustomerUpsertWithoutUserPointInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserPointInput, CustomerUpdateWithoutUserPointInput>, CustomerUncheckedUpdateWithoutUserPointInput>
  }

  export type OrderCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailsInput
    connect?: TicketWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailsInput
    upsert?: OrderUpsertWithoutOrderDetailsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderDetailsInput, OrderUpdateWithoutOrderDetailsInput>, OrderUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type TicketUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailsInput
    upsert?: TicketUpsertWithoutOrderDetailsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutOrderDetailsInput, TicketUpdateWithoutOrderDetailsInput>, TicketUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrderDetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutOrderInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type EnumStatusOrderFieldUpdateOperationsInput = {
    set?: $Enums.StatusOrder
  }

  export type OrderDetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput
    upsert?: CustomerUpsertWithoutOrderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrderInput, CustomerUpdateWithoutOrderInput>, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput> | OrderDetailsCreateWithoutOrderInput[] | OrderDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput | OrderDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutOrderInput | OrderDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailsCreateManyOrderInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutOrderInput | OrderDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutOrderInput | OrderDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutReviewInput = {
    create?: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewInput
    connect?: CustomerWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutReviewInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    connect?: EventWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewInput
    upsert?: CustomerUpsertWithoutReviewInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutReviewInput, CustomerUpdateWithoutReviewInput>, CustomerUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    upsert?: EventUpsertWithoutReviewInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewInput, EventUpdateWithoutReviewInput>, EventUncheckedUpdateWithoutReviewInput>
  }

  export type EventCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PromotorCreateNestedOneWithoutEventsInput = {
    create?: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventsInput
    connect?: PromotorWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumLocationFieldUpdateOperationsInput = {
    set?: $Enums.Location
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PromotorUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventsInput
    upsert?: PromotorUpsertWithoutEventsInput
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutEventsInput, PromotorUpdateWithoutEventsInput>, PromotorUncheckedUpdateWithoutEventsInput>
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrderDetailsCreateNestedManyWithoutTicketInput = {
    create?: XOR<OrderDetailsCreateWithoutTicketInput, OrderDetailsUncheckedCreateWithoutTicketInput> | OrderDetailsCreateWithoutTicketInput[] | OrderDetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutTicketInput | OrderDetailsCreateOrConnectWithoutTicketInput[]
    createMany?: OrderDetailsCreateManyTicketInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    connect?: EventWhereUniqueInput
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<OrderDetailsCreateWithoutTicketInput, OrderDetailsUncheckedCreateWithoutTicketInput> | OrderDetailsCreateWithoutTicketInput[] | OrderDetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutTicketInput | OrderDetailsCreateOrConnectWithoutTicketInput[]
    createMany?: OrderDetailsCreateManyTicketInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type EnumTicketCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TicketCategory
  }

  export type OrderDetailsUpdateManyWithoutTicketNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutTicketInput, OrderDetailsUncheckedCreateWithoutTicketInput> | OrderDetailsCreateWithoutTicketInput[] | OrderDetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutTicketInput | OrderDetailsCreateOrConnectWithoutTicketInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutTicketInput | OrderDetailsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: OrderDetailsCreateManyTicketInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutTicketInput | OrderDetailsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutTicketInput | OrderDetailsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type EventUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    upsert?: EventUpsertWithoutTicketsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketsInput, EventUpdateWithoutTicketsInput>, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type OrderDetailsUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutTicketInput, OrderDetailsUncheckedCreateWithoutTicketInput> | OrderDetailsCreateWithoutTicketInput[] | OrderDetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutTicketInput | OrderDetailsCreateOrConnectWithoutTicketInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutTicketInput | OrderDetailsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: OrderDetailsCreateManyTicketInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutTicketInput | OrderDetailsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutTicketInput | OrderDetailsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusOrderFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrder | EnumStatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrderFilter<$PrismaModel> | $Enums.StatusOrder
  }

  export type NestedEnumStatusOrderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrder | EnumStatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrder[] | ListEnumStatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrderWithAggregatesFilter<$PrismaModel> | $Enums.StatusOrder
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusOrderFilter<$PrismaModel>
    _max?: NestedEnumStatusOrderFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type NestedEnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type UserCouponCreateWithoutCustomerInput = {
    is_redeem?: boolean
    precentage: number
    created_at?: Date | string
    expired_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserCouponUncheckedCreateWithoutCustomerInput = {
    id?: number
    is_redeem?: boolean
    precentage: number
    created_at?: Date | string
    expired_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserCouponCreateOrConnectWithoutCustomerInput = {
    where: UserCouponWhereUniqueInput
    create: XOR<UserCouponCreateWithoutCustomerInput, UserCouponUncheckedCreateWithoutCustomerInput>
  }

  export type UserCouponCreateManyCustomerInputEnvelope = {
    data: UserCouponCreateManyCustomerInput | UserCouponCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserPointCreateWithoutCustomerInput = {
    point: number
    created_at?: Date | string
    expired_at?: Date | string | null
    is_transaction?: boolean
  }

  export type UserPointUncheckedCreateWithoutCustomerInput = {
    id?: number
    point: number
    created_at?: Date | string
    expired_at?: Date | string | null
    is_transaction?: boolean
  }

  export type UserPointCreateOrConnectWithoutCustomerInput = {
    where: UserPointWhereUniqueInput
    create: XOR<UserPointCreateWithoutCustomerInput, UserPointUncheckedCreateWithoutCustomerInput>
  }

  export type UserPointCreateManyCustomerInputEnvelope = {
    data: UserPointCreateManyCustomerInput | UserPointCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    description: string
    rating?: number
    updated_at?: Date | string
    created_at?: Date | string
    event: EventCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    description: string
    rating?: number
    event_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCouponUpsertWithWhereUniqueWithoutCustomerInput = {
    where: UserCouponWhereUniqueInput
    update: XOR<UserCouponUpdateWithoutCustomerInput, UserCouponUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCouponCreateWithoutCustomerInput, UserCouponUncheckedCreateWithoutCustomerInput>
  }

  export type UserCouponUpdateWithWhereUniqueWithoutCustomerInput = {
    where: UserCouponWhereUniqueInput
    data: XOR<UserCouponUpdateWithoutCustomerInput, UserCouponUncheckedUpdateWithoutCustomerInput>
  }

  export type UserCouponUpdateManyWithWhereWithoutCustomerInput = {
    where: UserCouponScalarWhereInput
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyWithoutCustomerInput>
  }

  export type UserCouponScalarWhereInput = {
    AND?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
    OR?: UserCouponScalarWhereInput[]
    NOT?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
    id?: IntFilter<"UserCoupon"> | number
    is_redeem?: BoolFilter<"UserCoupon"> | boolean
    precentage?: IntFilter<"UserCoupon"> | number
    created_at?: DateTimeFilter<"UserCoupon"> | Date | string
    expired_at?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    customer_id?: IntFilter<"UserCoupon"> | number
    updated_at?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
  }

  export type UserPointUpsertWithWhereUniqueWithoutCustomerInput = {
    where: UserPointWhereUniqueInput
    update: XOR<UserPointUpdateWithoutCustomerInput, UserPointUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserPointCreateWithoutCustomerInput, UserPointUncheckedCreateWithoutCustomerInput>
  }

  export type UserPointUpdateWithWhereUniqueWithoutCustomerInput = {
    where: UserPointWhereUniqueInput
    data: XOR<UserPointUpdateWithoutCustomerInput, UserPointUncheckedUpdateWithoutCustomerInput>
  }

  export type UserPointUpdateManyWithWhereWithoutCustomerInput = {
    where: UserPointScalarWhereInput
    data: XOR<UserPointUpdateManyMutationInput, UserPointUncheckedUpdateManyWithoutCustomerInput>
  }

  export type UserPointScalarWhereInput = {
    AND?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
    OR?: UserPointScalarWhereInput[]
    NOT?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
    id?: IntFilter<"UserPoint"> | number
    point?: IntFilter<"UserPoint"> | number
    created_at?: DateTimeFilter<"UserPoint"> | Date | string
    expired_at?: DateTimeNullableFilter<"UserPoint"> | Date | string | null
    is_transaction?: BoolFilter<"UserPoint"> | boolean
    customer_id?: IntFilter<"UserPoint"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    total_price?: IntFilter<"Order"> | number
    final_price?: IntFilter<"Order"> | number
    status_order?: EnumStatusOrderFilter<"Order"> | $Enums.StatusOrder
    expires_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    created_at?: DateTimeFilter<"Order"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    description?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    event_id?: IntFilter<"Review"> | number
    updated_at?: DateTimeFilter<"Review"> | Date | string
    created_at?: DateTimeFilter<"Review"> | Date | string
  }

  export type CustomerCreateWithoutUserCouponInput = {
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserPoint?: UserPointCreateNestedManyWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type CustomerUncheckedCreateWithoutUserCouponInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserPoint?: UserPointUncheckedCreateNestedManyWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type CustomerCreateOrConnectWithoutUserCouponInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserCouponInput, CustomerUncheckedCreateWithoutUserCouponInput>
  }

  export type CustomerUpsertWithoutUserCouponInput = {
    update: XOR<CustomerUpdateWithoutUserCouponInput, CustomerUncheckedUpdateWithoutUserCouponInput>
    create: XOR<CustomerCreateWithoutUserCouponInput, CustomerUncheckedCreateWithoutUserCouponInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutUserCouponInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutUserCouponInput, CustomerUncheckedUpdateWithoutUserCouponInput>
  }

  export type CustomerUpdateWithoutUserCouponInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserPoint?: UserPointUpdateManyWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserPoint?: UserPointUncheckedUpdateManyWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateWithoutUserPointInput = {
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponCreateNestedManyWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type CustomerUncheckedCreateWithoutUserPointInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponUncheckedCreateNestedManyWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type CustomerCreateOrConnectWithoutUserPointInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserPointInput, CustomerUncheckedCreateWithoutUserPointInput>
  }

  export type CustomerUpsertWithoutUserPointInput = {
    update: XOR<CustomerUpdateWithoutUserPointInput, CustomerUncheckedUpdateWithoutUserPointInput>
    create: XOR<CustomerCreateWithoutUserPointInput, CustomerUncheckedCreateWithoutUserPointInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutUserPointInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutUserPointInput, CustomerUncheckedUpdateWithoutUserPointInput>
  }

  export type CustomerUpdateWithoutUserPointInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUpdateManyWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserPointInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUncheckedUpdateManyWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutOrderDetailsInput = {
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    user: CustomerCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderDetailsInput = {
    id?: number
    user_id: number
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
  }

  export type TicketCreateWithoutOrderDetailsInput = {
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    updated_at?: Date | string
    created_at?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutOrderDetailsInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    event_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TicketCreateOrConnectWithoutOrderDetailsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
  }

  export type OrderUpsertWithoutOrderDetailsInput = {
    update: XOR<OrderUpdateWithoutOrderDetailsInput, OrderUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<OrderCreateWithoutOrderDetailsInput, OrderUncheckedCreateWithoutOrderDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderDetailsInput, OrderUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type OrderUpdateWithoutOrderDetailsInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: CustomerUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithoutOrderDetailsInput = {
    update: XOR<TicketUpdateWithoutOrderDetailsInput, TicketUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<TicketCreateWithoutOrderDetailsInput, TicketUncheckedCreateWithoutOrderDetailsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutOrderDetailsInput, TicketUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type TicketUpdateWithoutOrderDetailsInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrderDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateWithoutOrderInput = {
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
    ticket: TicketCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutOrderInput = {
    ticket_id: number
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderDetailsCreateOrConnectWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsCreateManyOrderInputEnvelope = {
    data: OrderDetailsCreateManyOrderInput | OrderDetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutOrderInput = {
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponCreateNestedManyWithoutCustomerInput
    UserPoint?: UserPointCreateNestedManyWithoutCustomerInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type CustomerUncheckedCreateWithoutOrderInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponUncheckedCreateNestedManyWithoutCustomerInput
    UserPoint?: UserPointUncheckedCreateNestedManyWithoutCustomerInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type CustomerCreateOrConnectWithoutOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderDetailsScalarWhereInput = {
    AND?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    OR?: OrderDetailsScalarWhereInput[]
    NOT?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    ticket_id?: IntFilter<"OrderDetails"> | number
    order_id?: IntFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    subPrice?: IntFilter<"OrderDetails"> | number
    updated_at?: DateTimeFilter<"OrderDetails"> | Date | string
    created_at?: DateTimeFilter<"OrderDetails"> | Date | string
  }

  export type CustomerUpsertWithoutOrderInput = {
    update: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
    create: XOR<CustomerCreateWithoutOrderInput, CustomerUncheckedCreateWithoutOrderInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrderInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrderInput, CustomerUncheckedUpdateWithoutOrderInput>
  }

  export type CustomerUpdateWithoutOrderInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUpdateManyWithoutCustomerNestedInput
    UserPoint?: UserPointUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUncheckedUpdateManyWithoutCustomerNestedInput
    UserPoint?: UserPointUncheckedUpdateManyWithoutCustomerNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateWithoutReviewInput = {
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponCreateNestedManyWithoutCustomerInput
    UserPoint?: UserPointCreateNestedManyWithoutCustomerInput
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type CustomerUncheckedCreateWithoutReviewInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code?: string | null
    referred_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    UserCoupon?: UserCouponUncheckedCreateNestedManyWithoutCustomerInput
    UserPoint?: UserPointUncheckedCreateNestedManyWithoutCustomerInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type CustomerCreateOrConnectWithoutReviewInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
  }

  export type EventCreateWithoutReviewInput = {
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    tickets?: TicketCreateNestedManyWithoutEventInput
    promotor: PromotorCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutReviewInput = {
    id?: number
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    promotor_id: number
    updated_at?: Date | string
    created_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
  }

  export type CustomerUpsertWithoutReviewInput = {
    update: XOR<CustomerUpdateWithoutReviewInput, CustomerUncheckedUpdateWithoutReviewInput>
    create: XOR<CustomerCreateWithoutReviewInput, CustomerUncheckedCreateWithoutReviewInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutReviewInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutReviewInput, CustomerUncheckedUpdateWithoutReviewInput>
  }

  export type CustomerUpdateWithoutReviewInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUpdateManyWithoutCustomerNestedInput
    UserPoint?: UserPointUpdateManyWithoutCustomerNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type CustomerUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: NullableStringFieldUpdateOperationsInput | string | null
    referred_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserCoupon?: UserCouponUncheckedUpdateManyWithoutCustomerNestedInput
    UserPoint?: UserPointUncheckedUpdateManyWithoutCustomerNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutReviewInput = {
    update: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateWithoutReviewInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutEventNestedInput
    promotor?: PromotorUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutPromotorInput = {
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    tickets?: TicketCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPromotorInput = {
    id?: number
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPromotorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventCreateManyPromotorInputEnvelope = {
    data: EventCreateManyPromotorInput | EventCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
  }

  export type EventUpdateManyWithWhereWithoutPromotorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutPromotorInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    thumbnail?: StringNullableFilter<"Event"> | string | null
    datetime?: DateTimeFilter<"Event"> | Date | string
    promotor_id?: IntFilter<"Event"> | number
    updated_at?: DateTimeFilter<"Event"> | Date | string
    created_at?: DateTimeFilter<"Event"> | Date | string
  }

  export type TicketCreateWithoutEventInput = {
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    updated_at?: Date | string
    created_at?: Date | string
    OrderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutEventInput = {
    description: string
    rating?: number
    updated_at?: Date | string
    created_at?: Date | string
    user: CustomerCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: number
    description: string
    rating?: number
    user_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PromotorCreateWithoutEventsInput = {
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    is_verify?: boolean
    updated_at?: Date | string | null
    created_at?: Date | string
  }

  export type PromotorUncheckedCreateWithoutEventsInput = {
    id?: number
    username: string
    name: string
    email: string
    password: string
    avatar?: string | null
    is_verify?: boolean
    updated_at?: Date | string | null
    created_at?: Date | string
  }

  export type PromotorCreateOrConnectWithoutEventsInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    description?: StringFilter<"Ticket"> | string
    seats?: IntFilter<"Ticket"> | number
    maxSeats?: IntFilter<"Ticket"> | number
    price?: IntFilter<"Ticket"> | number
    event_id?: IntFilter<"Ticket"> | number
    updated_at?: DateTimeFilter<"Ticket"> | Date | string
    created_at?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type PromotorUpsertWithoutEventsInput = {
    update: XOR<PromotorUpdateWithoutEventsInput, PromotorUncheckedUpdateWithoutEventsInput>
    create: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutEventsInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutEventsInput, PromotorUncheckedUpdateWithoutEventsInput>
  }

  export type PromotorUpdateWithoutEventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    is_verify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateWithoutTicketInput = {
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
    order: OrderCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutTicketInput = {
    order_id: number
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderDetailsCreateOrConnectWithoutTicketInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutTicketInput, OrderDetailsUncheckedCreateWithoutTicketInput>
  }

  export type OrderDetailsCreateManyTicketInputEnvelope = {
    data: OrderDetailsCreateManyTicketInput | OrderDetailsCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutTicketsInput = {
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    updated_at?: Date | string
    created_at?: Date | string
    Review?: ReviewCreateNestedManyWithoutEventInput
    promotor: PromotorCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutTicketsInput = {
    id?: number
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    promotor_id: number
    updated_at?: Date | string
    created_at?: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutTicketInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutTicketInput, OrderDetailsUncheckedUpdateWithoutTicketInput>
    create: XOR<OrderDetailsCreateWithoutTicketInput, OrderDetailsUncheckedCreateWithoutTicketInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutTicketInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutTicketInput, OrderDetailsUncheckedUpdateWithoutTicketInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutTicketInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutTicketInput>
  }

  export type EventUpsertWithoutTicketsInput = {
    update: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type EventUpdateWithoutTicketsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUpdateManyWithoutEventNestedInput
    promotor?: PromotorUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCouponCreateManyCustomerInput = {
    id?: number
    is_redeem?: boolean
    precentage: number
    created_at?: Date | string
    expired_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UserPointCreateManyCustomerInput = {
    id?: number
    point: number
    created_at?: Date | string
    expired_at?: Date | string | null
    is_transaction?: boolean
  }

  export type OrderCreateManyUserInput = {
    id?: number
    total_price: number
    final_price: number
    status_order?: $Enums.StatusOrder
    expires_at: Date | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    description: string
    rating?: number
    event_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCouponUpdateWithoutCustomerInput = {
    is_redeem?: BoolFieldUpdateOperationsInput | boolean
    precentage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCouponUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_redeem?: BoolFieldUpdateOperationsInput | boolean
    precentage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCouponUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_redeem?: BoolFieldUpdateOperationsInput | boolean
    precentage?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointUpdateWithoutCustomerInput = {
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_transaction?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPointUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_transaction?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPointUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_transaction?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUpdateWithoutUserInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status_order?: EnumStatusOrderFieldUpdateOperationsInput | $Enums.StatusOrder
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateManyOrderInput = {
    ticket_id: number
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderDetailsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutOrderInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUncheckedUpdateManyWithoutOrderInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyPromotorInput = {
    id?: number
    title: string
    slug?: string
    description: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    thumbnail?: string | null
    datetime: Date | string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventUpdateWithoutPromotorInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyEventInput = {
    id?: number
    category: $Enums.TicketCategory
    description: string
    seats?: number
    maxSeats?: number
    price?: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type ReviewCreateManyEventInput = {
    id?: number
    description: string
    rating?: number
    user_id: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type TicketUpdateWithoutEventInput = {
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetails?: OrderDetailsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    description?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    maxSeats?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutEventInput = {
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: CustomerUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateManyTicketInput = {
    order_id: number
    quantity: number
    subPrice: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type OrderDetailsUpdateWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutTicketInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUncheckedUpdateManyWithoutTicketInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    subPrice?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}