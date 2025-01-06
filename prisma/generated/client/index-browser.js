
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CustomerScalarFieldEnum = {
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

exports.Prisma.UserCouponScalarFieldEnum = {
  id: 'id',
  is_redeem: 'is_redeem',
  precentage: 'precentage',
  created_at: 'created_at',
  expired_at: 'expired_at',
  customer_id: 'customer_id',
  updated_at: 'updated_at',
  ref_code: 'ref_code',
  discount: 'discount'
};

exports.Prisma.UserPointScalarFieldEnum = {
  id: 'id',
  point: 'point',
  created_at: 'created_at',
  expired_at: 'expired_at',
  is_transaction: 'is_transaction',
  customer_id: 'customer_id'
};

exports.Prisma.OrderDetailsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  ticket_id: 'ticket_id',
  order_id: 'order_id',
  quantity: 'quantity',
  subPrice: 'subPrice',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  total_price: 'total_price',
  final_price: 'final_price',
  status_order: 'status_order',
  expires_at: 'expires_at',
  updated_at: 'updated_at',
  created_at: 'created_at',
  mid_transaction_time: 'mid_transaction_time',
  mid_transaction_status: 'mid_transaction_status',
  mid_transaction_id: 'mid_transaction_id',
  mid_payment_type: 'mid_payment_type',
  mid_payment_detail: 'mid_payment_detail',
  coupon: 'coupon',
  point: 'point',
  discount: 'discount'
};

exports.Prisma.ReviewScalarFieldEnum = {
  user_id: 'user_id',
  event_id: 'event_id',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.PromotorScalarFieldEnum = {
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

exports.Prisma.EventScalarFieldEnum = {
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
  created_at: 'created_at',
  coupon_promotor: 'coupon_promotor'
};

exports.Prisma.TicketScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.StatusOrder = exports.$Enums.StatusOrder = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

exports.Category = exports.$Enums.Category = {
  concert: 'concert',
  sports: 'sports',
  theater: 'theater',
  fanmeet: 'fanmeet',
  seminar: 'seminar'
};

exports.Location = exports.$Enums.Location = {
  jakarta: 'jakarta',
  bandung: 'bandung',
  yogyakarta: 'yogyakarta'
};

exports.TicketCategory = exports.$Enums.TicketCategory = {
  VIP: 'VIP',
  REGULAR: 'REGULAR'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
