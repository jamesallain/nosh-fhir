module.exports = 
`

type User {
  username: String
  email: String
  password: String
  patients: [Patient]
}

type Pokemon {
  name: String!
  url: String!
}

type Address {
  use: String
  type: String
  text: String
  line: String
  city: String
  district: String
  postalcode: String
  country: String
  period: Period
}

input AddressInput {
  use: String
  type: String
  text: String
  line: String
  city: String
  district: String
  postalcode: String
  country: String
  period: PeriodInput
}

type Administration {
  schedule: Timing
  quantity: Simplequantity
  ratequantity: Simplequantity
  rateratio: Ratio
}

input AdministrationInput {
  schedule: TimingInput
  quantity: SimplequantityInput
  ratequantity: SimplequantityInput
  rateratio: RatioInput
}

type Age {
  value: Float
  comparator: String
  unit: String
  system: String
  code: String
}

input AgeInput {
  value: Float
  comparator: String
  unit: String
  system: String
  code: String
}

type Allergryintolerance implements Node {
  # A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  id: ID!
  allergyIntoleranceId: Int!
  identifier: [Identifier]
  clinicalstatus: String
  verificationstatus: String
  type: String
  category: [String]
  criticality: String
  code: Codeableconcept
  patient: String
  onsetdatetime: String
  onsetage: Age
  onsetperiod: Period
  onsetrange: Range
  onsetstring: String
  asserteddate: String
  recorder: Reference
  aserter: Reference
  lastoccurrence: String
  note: [Annotation]
  reaction: [Reaction]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# A condition to be used against Allergryintolerance object types. All fields
# are tested for equality and combined with a logical ‘and.’
input AllergryintoleranceCondition {
  # Checks for equality with the object’s allergyIntoleranceId field.
  allergyIntoleranceId: Int

  # Checks for equality with the object’s identifier field.
  identifier: [IdentifierInput]

  # Checks for equality with the object’s clinicalstatus field.
  clinicalstatus: String

  # Checks for equality with the object’s verificationstatus field.
  verificationstatus: String

  # Checks for equality with the object’s type field.
  type: String

  # Checks for equality with the object’s category field.
  category: [String]

  # Checks for equality with the object’s criticality field.
  criticality: String

  # Checks for equality with the object’s code field.
  code: CodeableconceptInput

  # Checks for equality with the object’s patient field.
  patient: String

  # Checks for equality with the object’s onsetdatetime field.
  onsetdatetime: String

  # Checks for equality with the object’s onsetage field.
  onsetage: AgeInput

  # Checks for equality with the object’s onsetperiod field.
  onsetperiod: PeriodInput

  # Checks for equality with the object’s onsetrange field.
  onsetrange: RangeInput

  # Checks for equality with the object’s onsetstring field.
  onsetstring: String

  # Checks for equality with the object’s asserteddate field.
  asserteddate: String

  # Checks for equality with the object’s recorder field.
  recorder: ReferenceInput

  # Checks for equality with the object’s aserter field.
  aserter: ReferenceInput

  # Checks for equality with the object’s lastoccurrence field.
  lastoccurrence: String

  # Checks for equality with the object’s note field.
  note: [AnnotationInput]

  # Checks for equality with the object’s reaction field.
  reaction: [ReactionInput]

  # Checks for equality with the object’s rowId field.
  rowId: String

  # Checks for equality with the object’s fullurl field.
  fullurl: String

  # Checks for equality with the object’s resourcetype field.
  resourcetype: String

  # Checks for equality with the object’s meta field.
  meta: String
}

input AllergryintoleranceInput {
  allergyIntoleranceId: Int
  identifier: [IdentifierInput]
  clinicalstatus: String
  verificationstatus: String
  type: String
  category: [String]
  criticality: String
  code: CodeableconceptInput
  patient: String
  onsetdatetime: String
  onsetage: AgeInput
  onsetperiod: PeriodInput
  onsetrange: RangeInput
  onsetstring: String
  asserteddate: String
  recorder: ReferenceInput
  aserter: ReferenceInput
  lastoccurrence: String
  note: [AnnotationInput]
  reaction: [ReactionInput]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# Represents an update to a Allergryintolerance. Fields that are set will be updated.
input AllergryintolerancePatch {
  allergyIntoleranceId: Int
  identifier: [IdentifierInput]
  clinicalstatus: String
  verificationstatus: String
  type: String
  category: [String]
  criticality: String
  code: CodeableconceptInput
  patient: String
  onsetdatetime: String
  onsetage: AgeInput
  onsetperiod: PeriodInput
  onsetrange: RangeInput
  onsetstring: String
  asserteddate: String
  recorder: ReferenceInput
  aserter: ReferenceInput
  lastoccurrence: String
  note: [AnnotationInput]
  reaction: [ReactionInput]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# A connection to a list of Allergryintolerance values.
type AllergryintolerancesConnection {
  # Information to aid in pagination.
  pageInfo: PageInfo!

  # The count of *all* Allergryintolerance you could get from the connection.
  totalCount: Int

  # A list of edges which contains the Allergryintolerance and cursor to aid in pagination.
  edges: [AllergryintolerancesEdge]

  # A list of Allergryintolerance objects.
  nodes: [Allergryintolerance!]
}

# A Allergryintolerance edge in the connection.
type AllergryintolerancesEdge {
  # A cursor for use in pagination.
  cursor: Cursor

  # The Allergryintolerance at the end of the edge.
  node: Allergryintolerance!
}

# Methods to use when ordering Allergryintolerance.
enum AllergryintolerancesOrderBy {
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  NATURAL
  ALLERGY_INTOLERANCE_ID_ASC
  ALLERGY_INTOLERANCE_ID_DESC
  IDENTIFIER_ASC
  IDENTIFIER_DESC
  CLINICALSTATUS_ASC
  CLINICALSTATUS_DESC
  VERIFICATIONSTATUS_ASC
  VERIFICATIONSTATUS_DESC
  TYPE_ASC
  TYPE_DESC
  CATEGORY_ASC
  CATEGORY_DESC
  CRITICALITY_ASC
  CRITICALITY_DESC
  CODE_ASC
  CODE_DESC
  PATIENT_ASC
  PATIENT_DESC
  ONSETDATETIME_ASC
  ONSETDATETIME_DESC
  ONSETAGE_ASC
  ONSETAGE_DESC
  ONSETPERIOD_ASC
  ONSETPERIOD_DESC
  ONSETRANGE_ASC
  ONSETRANGE_DESC
  ONSETSTRING_ASC
  ONSETSTRING_DESC
  ASSERTEDDATE_ASC
  ASSERTEDDATE_DESC
  RECORDER_ASC
  RECORDER_DESC
  ASERTER_ASC
  ASERTER_DESC
  LASTOCCURRENCE_ASC
  LASTOCCURRENCE_DESC
  NOTE_ASC
  NOTE_DESC
  REACTION_ASC
  REACTION_DESC
  ID_ASC
  ID_DESC
  FULLURL_ASC
  FULLURL_DESC
  RESOURCETYPE_ASC
  RESOURCETYPE_DESC
  META_ASC
  META_DESC
}

type Annotation {
  authorreference: Reference
  authorstring: String
  time: String
  text: String
}

input AnnotationInput {
  authorreference: ReferenceInput
  authorstring: String
  time: String
  text: String
}

type Attachment {
  contenttype: String
  language: String
  data: String
  url: String
  size: Int
  hash: String
  title: String
  creation: String
}

input AttachmentInput {
  contenttype: String
  language: String
  data: String
  url: String
  size: Int
  hash: String
  title: String
  creation: String
}

type Codeableconcept {
  coding: [Coding]
  text: String
}

input CodeableconceptInput {
  coding: [CodingInput]
  text: String
}

type Coding {
  system: String
  verison: String
  code: String
  display: String
  userselected: Boolean
}

input CodingInput {
  system: String
  verison: String
  code: String
  display: String
  userselected: Boolean
}

type Contactpoint {
  system: String
  value: String
  use: String
  rank: String
  period: Period
}

input ContactpointInput {
  system: String
  value: String
  use: String
  rank: String
  period: PeriodInput
}

# All input for the createAllergryintolerance mutation.
input CreateAllergryintoleranceInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The Allergryintolerance to be created by this mutation.
  allergryintolerance: AllergryintoleranceInput!
}

# The output of our createAllergryintolerance mutation.
type CreateAllergryintolerancePayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String

  # The Allergryintolerance that was created by this mutation.
  allergryintolerance: Allergryintolerance

  # An edge for our Allergryintolerance. May be used by Relay 1.
  allergryintoleranceEdge(
    # The method to use when ordering Allergryintolerance.
    orderBy: AllergryintolerancesOrderBy = PRIMARY_KEY_ASC
  ): AllergryintolerancesEdge

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the createEncounter mutation.
input CreateEncounterInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The Encounter to be created by this mutation.
  encounter: EncounterInput!
}

# The output of our createEncounter mutation.
type CreateEncounterPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String

  # The Encounter that was created by this mutation.
  encounter: Encounter

  # An edge for our Encounter. May be used by Relay 1.
  encounterEdge(
    # The method to use when ordering Encounter.
    orderBy: EncountersOrderBy = PRIMARY_KEY_ASC
  ): EncountersEdge

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the createNutritionorder mutation.
input CreateNutritionorderInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The Nutritionorder to be created by this mutation.
  nutritionorder: NutritionorderInput!
}

# The output of our createNutritionorder mutation.
type CreateNutritionorderPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String

  # The Nutritionorder that was created by this mutation.
  nutritionorder: Nutritionorder

  # An edge for our Nutritionorder. May be used by Relay 1.
  nutritionorderEdge(
    # The method to use when ordering Nutritionorder.
    orderBy: NutritionordersOrderBy = PRIMARY_KEY_ASC
  ): NutritionordersEdge

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the createObservation mutation.
input CreateObservationInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The Observation to be created by this mutation.
  observation: ObservationInput!
}

# The output of our createObservation mutation.
type CreateObservationPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String

  # The Observation that was created by this mutation.
  observation: Observation

  # An edge for our Observation. May be used by Relay 1.
  observationEdge(
    # The method to use when ordering Observation.
    orderBy: ObservationsOrderBy = PRIMARY_KEY_ASC
  ): ObservationsEdge

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the createPatient mutation.
input CreatePatientInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The Patient to be created by this mutation.
  patient: PatientInput!
}

# The output of our createPatient mutation.
type CreatePatientPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String

  # The Patient that was created by this mutation.
  patient: Patient

  # An edge for our Patient. May be used by Relay 1.
  patientEdge(
    # The method to use when ordering Patient.
    orderBy: PatientsOrderBy = PRIMARY_KEY_ASC
  ): PatientsEdge

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# A location in a connection that can be used for resuming pagination.
scalar Cursor

# All input for the deleteAllergryintoleranceByAllergyIntoleranceId mutation.
input DeleteAllergryintoleranceByAllergyIntoleranceIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  allergyIntoleranceId: Int!
}

# All input for the deleteAllergryintolerance mutation.
input DeleteAllergryintoleranceInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Allergryintolerance to be deleted.
  id: ID!
}

# The output of our deleteAllergryintolerance mutation.
type DeleteAllergryintolerancePayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  allergryintolerance: Allergryintolerance
  deletedAllergryintoleranceId: ID

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the deleteEncounterByEncounterId mutation.
input DeleteEncounterByEncounterIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  encounterId: Int!
}

# All input for the deleteEncounter mutation.
input DeleteEncounterInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Encounter to be deleted.
  id: ID!
}

# The output of our deleteEncounter mutation.
type DeleteEncounterPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  encounter: Encounter
  deletedEncounterId: ID

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the deleteNutritionorderByNutritionOrderId mutation.
input DeleteNutritionorderByNutritionOrderIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  nutritionOrderId: Int!
}

# All input for the deleteNutritionorder mutation.
input DeleteNutritionorderInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Nutritionorder to be deleted.
  id: ID!
}

# The output of our deleteNutritionorder mutation.
type DeleteNutritionorderPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  nutritionorder: Nutritionorder
  deletedNutritionorderId: ID

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the deleteObservationByObservationId mutation.
input DeleteObservationByObservationIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  observationId: Int!
}

# All input for the deleteObservation mutation.
input DeleteObservationInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Observation to be deleted.
  id: ID!
}

# The output of our deleteObservation mutation.
type DeleteObservationPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  observation: Observation
  deletedObservationId: ID

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the deletePatientByPatientId mutation.
input DeletePatientByPatientIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  patientId: Int!
}

# All input for the deletePatient mutation.
input DeletePatientInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Patient to be deleted.
  id: ID!
}

# The output of our deletePatient mutation.
type DeletePatientPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  patient: Patient
  deletedPatientId: ID

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

type Duration {
  value: Float
  comparator: String
  unit: String
  system: String
  code: String
}

input DurationInput {
  value: Float
  comparator: String
  unit: String
  system: String
  code: String
}

type Encounter implements Node {
  # A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  id: ID!
  encounterId: Int!
  identifier: [Identifier]
  status: String
  statushistory: String
  class: String
  classhistory: String
  type: [Codeableconcept]
  priority: Codeableconcept
  subject: Reference
  episodeofcare: [Reference]
  incomingreferral: [Reference]
  participant: String
  appointment: Reference
  period: Period
  length: Duration
  reason: [Codeableconcept]
  diagnosis: String
  account: Reference
  hospitalization: String
  location: String
  serviceprovider: Reference
  partof: Reference
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# A condition to be used against Encounter object types. All fields are tested
# for equality and combined with a logical ‘and.’
input EncounterCondition {
  # Checks for equality with the object’s encounterId field.
  encounterId: Int

  # Checks for equality with the object’s identifier field.
  identifier: [IdentifierInput]

  # Checks for equality with the object’s status field.
  status: String

  # Checks for equality with the object’s statushistory field.
  statushistory: String

  # Checks for equality with the object’s class field.
  class: String

  # Checks for equality with the object’s classhistory field.
  classhistory: String

  # Checks for equality with the object’s type field.
  type: [CodeableconceptInput]

  # Checks for equality with the object’s priority field.
  priority: CodeableconceptInput

  # Checks for equality with the object’s subject field.
  subject: ReferenceInput

  # Checks for equality with the object’s episodeofcare field.
  episodeofcare: [ReferenceInput]

  # Checks for equality with the object’s incomingreferral field.
  incomingreferral: [ReferenceInput]

  # Checks for equality with the object’s participant field.
  participant: String

  # Checks for equality with the object’s appointment field.
  appointment: ReferenceInput

  # Checks for equality with the object’s period field.
  period: PeriodInput

  # Checks for equality with the object’s length field.
  length: DurationInput

  # Checks for equality with the object’s reason field.
  reason: [CodeableconceptInput]

  # Checks for equality with the object’s diagnosis field.
  diagnosis: String

  # Checks for equality with the object’s account field.
  account: ReferenceInput

  # Checks for equality with the object’s hospitalization field.
  hospitalization: String

  # Checks for equality with the object’s location field.
  location: String

  # Checks for equality with the object’s serviceprovider field.
  serviceprovider: ReferenceInput

  # Checks for equality with the object’s partof field.
  partof: ReferenceInput

  # Checks for equality with the object’s rowId field.
  rowId: String

  # Checks for equality with the object’s fullurl field.
  fullurl: String

  # Checks for equality with the object’s resourcetype field.
  resourcetype: String

  # Checks for equality with the object’s meta field.
  meta: String
}

input EncounterInput {
  encounterId: Int
  identifier: [IdentifierInput]
  status: String
  statushistory: String
  class: String
  classhistory: String
  type: [CodeableconceptInput]
  priority: CodeableconceptInput
  subject: ReferenceInput
  episodeofcare: [ReferenceInput]
  incomingreferral: [ReferenceInput]
  participant: String
  appointment: ReferenceInput
  period: PeriodInput
  length: DurationInput
  reason: [CodeableconceptInput]
  diagnosis: String
  account: ReferenceInput
  hospitalization: String
  location: String
  serviceprovider: ReferenceInput
  partof: ReferenceInput
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# Represents an update to a Encounter. Fields that are set will be updated.
input EncounterPatch {
  encounterId: Int
  identifier: [IdentifierInput]
  status: String
  statushistory: String
  class: String
  classhistory: String
  type: [CodeableconceptInput]
  priority: CodeableconceptInput
  subject: ReferenceInput
  episodeofcare: [ReferenceInput]
  incomingreferral: [ReferenceInput]
  participant: String
  appointment: ReferenceInput
  period: PeriodInput
  length: DurationInput
  reason: [CodeableconceptInput]
  diagnosis: String
  account: ReferenceInput
  hospitalization: String
  location: String
  serviceprovider: ReferenceInput
  partof: ReferenceInput
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# A connection to a list of Encounter values.
type EncountersConnection {
  # Information to aid in pagination.
  pageInfo: PageInfo!

  # The count of *all* Encounter you could get from the connection.
  totalCount: Int

  # A list of edges which contains the Encounter and cursor to aid in pagination.
  edges: [EncountersEdge]

  # A list of Encounter objects.
  nodes: [Encounter!]
}

# A Encounter edge in the connection.
type EncountersEdge {
  # A cursor for use in pagination.
  cursor: Cursor

  # The Encounter at the end of the edge.
  node: Encounter!
}

# Methods to use when ordering Encounter.
enum EncountersOrderBy {
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  NATURAL
  ENCOUNTER_ID_ASC
  ENCOUNTER_ID_DESC
  IDENTIFIER_ASC
  IDENTIFIER_DESC
  STATUS_ASC
  STATUS_DESC
  STATUSHISTORY_ASC
  STATUSHISTORY_DESC
  CLASS_ASC
  CLASS_DESC
  CLASSHISTORY_ASC
  CLASSHISTORY_DESC
  TYPE_ASC
  TYPE_DESC
  PRIORITY_ASC
  PRIORITY_DESC
  SUBJECT_ASC
  SUBJECT_DESC
  EPISODEOFCARE_ASC
  EPISODEOFCARE_DESC
  INCOMINGREFERRAL_ASC
  INCOMINGREFERRAL_DESC
  PARTICIPANT_ASC
  PARTICIPANT_DESC
  APPOINTMENT_ASC
  APPOINTMENT_DESC
  PERIOD_ASC
  PERIOD_DESC
  LENGTH_ASC
  LENGTH_DESC
  REASON_ASC
  REASON_DESC
  DIAGNOSIS_ASC
  DIAGNOSIS_DESC
  ACCOUNT_ASC
  ACCOUNT_DESC
  HOSPITALIZATION_ASC
  HOSPITALIZATION_DESC
  LOCATION_ASC
  LOCATION_DESC
  SERVICEPROVIDER_ASC
  SERVICEPROVIDER_DESC
  PARTOF_ASC
  PARTOF_DESC
  ID_ASC
  ID_DESC
  FULLURL_ASC
  FULLURL_DESC
  RESOURCETYPE_ASC
  RESOURCETYPE_DESC
  META_ASC
  META_DESC
}

type Enteralformula {
  baseformulatype: Codeableconcept
  baseformalproductname: String
  additivetype: Codeableconcept
  caloricdensity: Simplequantity
  routeofadministration: Codeableconcept
  administration: [Administration]
  maxvolumetodeliver: Simplequantity
  administrationinstruction: String
}

input EnteralformulaInput {
  baseformulatype: CodeableconceptInput
  baseformalproductname: String
  additivetype: CodeableconceptInput
  caloricdensity: SimplequantityInput
  routeofadministration: CodeableconceptInput
  administration: [AdministrationInput]
  maxvolumetodeliver: SimplequantityInput
  administrationinstruction: String
}

type High {
  value: Float
  unit: String
  system: String
  code: String
}

input HighInput {
  value: Float
  unit: String
  system: String
  code: String
}

type Humanname {
  use: String
  text: String
  given: [String]
  prefix: [String]
  suffix: [String]
  period: Period
}

input HumannameInput {
  use: String
  text: String
  given: [String]
  prefix: [String]
  suffix: [String]
  period: PeriodInput
}

type Identifier {
  use: String
  type: Codeableconcept
  system: String
  value: String
  period: Period
  assigner: Reference
}

input IdentifierInput {
  use: String
  type: CodeableconceptInput
  system: String
  value: String
  period: PeriodInput
  assigner: ReferenceInput
}

type Low {
  value: Float
  unit: String
  system: String
  code: String
}

input LowInput {
  value: Float
  unit: String
  system: String
  code: String
}

type Meta {
  verionid: String
  lastupdated: String
  profile: [String]
  security: [Coding]
  tag: [Coding]
}

input MetaInput {
  verionid: String
  lastupdated: String
  profile: [String]
  security: [CodingInput]
  tag: [CodingInput]
}

# The root mutation type which contains root level fields which mutate data.
type Mutation {
  # Creates a single Allergryintolerance.
  createAllergryintolerance(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: CreateAllergryintoleranceInput!
  ): CreateAllergryintolerancePayload

  # Updates a single Allergryintolerance using its globally unique id and a patch.
  updateAllergryintolerance(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateAllergryintoleranceInput!
  ): UpdateAllergryintolerancePayload

  # Updates a single Allergryintolerance using a unique key and a patch.
  updateAllergryintoleranceByAllergyIntoleranceId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateAllergryintoleranceByAllergyIntoleranceIdInput!
  ): UpdateAllergryintolerancePayload

  # Deletes a single Allergryintolerance using its globally unique id.
  deleteAllergryintolerance(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteAllergryintoleranceInput!
  ): DeleteAllergryintolerancePayload

  # Deletes a single Allergryintolerance using a unique key.
  deleteAllergryintoleranceByAllergyIntoleranceId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteAllergryintoleranceByAllergyIntoleranceIdInput!
  ): DeleteAllergryintolerancePayload

  # Creates a single Encounter.
  createEncounter(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: CreateEncounterInput!
  ): CreateEncounterPayload

  # Updates a single Encounter using its globally unique id and a patch.
  updateEncounter(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateEncounterInput!
  ): UpdateEncounterPayload

  # Updates a single Encounter using a unique key and a patch.
  updateEncounterByEncounterId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateEncounterByEncounterIdInput!
  ): UpdateEncounterPayload

  # Deletes a single Encounter using its globally unique id.
  deleteEncounter(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteEncounterInput!
  ): DeleteEncounterPayload

  # Deletes a single Encounter using a unique key.
  deleteEncounterByEncounterId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteEncounterByEncounterIdInput!
  ): DeleteEncounterPayload

  # Creates a single Nutritionorder.
  createNutritionorder(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: CreateNutritionorderInput!
  ): CreateNutritionorderPayload

  # Updates a single Nutritionorder using its globally unique id and a patch.
  updateNutritionorder(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateNutritionorderInput!
  ): UpdateNutritionorderPayload

  # Updates a single Nutritionorder using a unique key and a patch.
  updateNutritionorderByNutritionOrderId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateNutritionorderByNutritionOrderIdInput!
  ): UpdateNutritionorderPayload

  # Deletes a single Nutritionorder using its globally unique id.
  deleteNutritionorder(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteNutritionorderInput!
  ): DeleteNutritionorderPayload

  # Deletes a single Nutritionorder using a unique key.
  deleteNutritionorderByNutritionOrderId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteNutritionorderByNutritionOrderIdInput!
  ): DeleteNutritionorderPayload

  # Creates a single Observation.
  createObservation(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: CreateObservationInput!
  ): CreateObservationPayload

  # Updates a single Observation using its globally unique id and a patch.
  updateObservation(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateObservationInput!
  ): UpdateObservationPayload

  # Updates a single Observation using a unique key and a patch.
  updateObservationByObservationId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdateObservationByObservationIdInput!
  ): UpdateObservationPayload

  # Deletes a single Observation using its globally unique id.
  deleteObservation(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteObservationInput!
  ): DeleteObservationPayload

  # Deletes a single Observation using a unique key.
  deleteObservationByObservationId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeleteObservationByObservationIdInput!
  ): DeleteObservationPayload

  # Creates a single Patient.
  createPatient(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: CreatePatientInput!
  ): CreatePatientPayload

  # Updates a single Patient using its globally unique id and a patch.
  updatePatient(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdatePatientInput!
  ): UpdatePatientPayload

  # Updates a single Patient using a unique key and a patch.
  updatePatientByPatientId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: UpdatePatientByPatientIdInput!
  ): UpdatePatientPayload

  # Deletes a single Patient using its globally unique id.
  deletePatient(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeletePatientInput!
  ): DeletePatientPayload

  # Deletes a single Patient using a unique key.
  deletePatientByPatientId(
    # The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    input: DeletePatientByPatientIdInput!
  ): DeletePatientPayload
}

# An object with a globally unique ID.
interface Node {
  # A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  id: ID!
}

type Nutrient {
  modifier: Codeableconcept
  amount: Simplequantity
}

input NutrientInput {
  modifier: CodeableconceptInput
  amount: SimplequantityInput
}

type Nutritionorder implements Node {
  # A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  id: ID!
  nutritionOrderId: Int!
  identifier: [Identifier]
  status: String
  patient: String
  datetime: String
  orderer: Reference
  allergyintolerance: String
  foodpreferencemodifier: Codeableconcept
  excludefoodmodifier: Codeableconcept
  oraldiet: Oraldiet
  supplememt: Supplement
  enteralformula: Enteralformula
  rowId: String
  fullurl: String
  resourcetype: String
  meta: Meta
}

# A condition to be used against Nutritionorder object types. All fields are
# tested for equality and combined with a logical ‘and.’
input NutritionorderCondition {
  # Checks for equality with the object’s nutritionOrderId field.
  nutritionOrderId: Int

  # Checks for equality with the object’s identifier field.
  identifier: [IdentifierInput]

  # Checks for equality with the object’s status field.
  status: String

  # Checks for equality with the object’s patient field.
  patient: String

  # Checks for equality with the object’s datetime field.
  datetime: String

  # Checks for equality with the object’s orderer field.
  orderer: ReferenceInput

  # Checks for equality with the object’s allergyintolerance field.
  allergyintolerance: String

  # Checks for equality with the object’s foodpreferencemodifier field.
  foodpreferencemodifier: CodeableconceptInput

  # Checks for equality with the object’s excludefoodmodifier field.
  excludefoodmodifier: CodeableconceptInput

  # Checks for equality with the object’s oraldiet field.
  oraldiet: OraldietInput

  # Checks for equality with the object’s supplememt field.
  supplememt: SupplementInput

  # Checks for equality with the object’s enteralformula field.
  enteralformula: EnteralformulaInput

  # Checks for equality with the object’s rowId field.
  rowId: String

  # Checks for equality with the object’s fullurl field.
  fullurl: String

  # Checks for equality with the object’s resourcetype field.
  resourcetype: String

  # Checks for equality with the object’s meta field.
  meta: MetaInput
}

input NutritionorderInput {
  nutritionOrderId: Int
  identifier: [IdentifierInput]
  status: String
  patient: String
  datetime: String
  orderer: ReferenceInput
  allergyintolerance: String
  foodpreferencemodifier: CodeableconceptInput
  excludefoodmodifier: CodeableconceptInput
  oraldiet: OraldietInput
  supplememt: SupplementInput
  enteralformula: EnteralformulaInput
  rowId: String
  fullurl: String
  resourcetype: String
  meta: MetaInput
}

# Represents an update to a Nutritionorder. Fields that are set will be updated.
input NutritionorderPatch {
  nutritionOrderId: Int
  identifier: [IdentifierInput]
  status: String
  patient: String
  datetime: String
  orderer: ReferenceInput
  allergyintolerance: String
  foodpreferencemodifier: CodeableconceptInput
  excludefoodmodifier: CodeableconceptInput
  oraldiet: OraldietInput
  supplememt: SupplementInput
  enteralformula: EnteralformulaInput
  rowId: String
  fullurl: String
  resourcetype: String
  meta: MetaInput
}

# A connection to a list of Nutritionorder values.
type NutritionordersConnection {
  # Information to aid in pagination.
  pageInfo: PageInfo!

  # The count of *all* Nutritionorder you could get from the connection.
  totalCount: Int

  # A list of edges which contains the Nutritionorder and cursor to aid in pagination.
  edges: [NutritionordersEdge]

  # A list of Nutritionorder objects.
  nodes: [Nutritionorder!]
}

# A Nutritionorder edge in the connection.
type NutritionordersEdge {
  # A cursor for use in pagination.
  cursor: Cursor

  # The Nutritionorder at the end of the edge.
  node: Nutritionorder!
}

# Methods to use when ordering Nutritionorder.
enum NutritionordersOrderBy {
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  NATURAL
  NUTRITION_ORDER_ID_ASC
  NUTRITION_ORDER_ID_DESC
  IDENTIFIER_ASC
  IDENTIFIER_DESC
  STATUS_ASC
  STATUS_DESC
  PATIENT_ASC
  PATIENT_DESC
  DATETIME_ASC
  DATETIME_DESC
  ORDERER_ASC
  ORDERER_DESC
  ALLERGYINTOLERANCE_ASC
  ALLERGYINTOLERANCE_DESC
  FOODPREFERENCEMODIFIER_ASC
  FOODPREFERENCEMODIFIER_DESC
  EXCLUDEFOODMODIFIER_ASC
  EXCLUDEFOODMODIFIER_DESC
  ORALDIET_ASC
  ORALDIET_DESC
  SUPPLEMEMT_ASC
  SUPPLEMEMT_DESC
  ENTERALFORMULA_ASC
  ENTERALFORMULA_DESC
  ID_ASC
  ID_DESC
  FULLURL_ASC
  FULLURL_DESC
  RESOURCETYPE_ASC
  RESOURCETYPE_DESC
  META_ASC
  META_DESC
}

type Observation implements Node {
  # A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  id: ID!
  observationId: Int!
  identifier: [Identifier]
  basedon: [Reference]
  status: String
  category: [Codeableconcept]
  code: Codeableconcept
  subject: Reference
  content: Reference
  effectivedatetime: String
  effectiveperiod: Period
  issued: String
  performer: [Reference]
  valuequantity: Quantity
  valuecodeableconcept: Codeableconcept
  valuetext: String
  valueboolean: Boolean
  valuerange: String
  valueratio: String
  valuesampledata: String
  valueattachment: Attachment
  valuetime: String
  valuedatetime: String
  valueperiod: Period
  dataabsentreason: Codeableconcept
  interpretation: Codeableconcept
  comment: String
  bodysite: Codeableconcept
  method: Codeableconcept
  specimen: Reference
  device: Reference
  referencerange: [String]
  related: [String]
  component: [String]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# A condition to be used against Observation object types. All fields are tested
# for equality and combined with a logical ‘and.’
input ObservationCondition {
  # Checks for equality with the object’s observationId field.
  observationId: Int

  # Checks for equality with the object’s identifier field.
  identifier: [IdentifierInput]

  # Checks for equality with the object’s basedon field.
  basedon: [ReferenceInput]

  # Checks for equality with the object’s status field.
  status: String

  # Checks for equality with the object’s category field.
  category: [CodeableconceptInput]

  # Checks for equality with the object’s code field.
  code: CodeableconceptInput

  # Checks for equality with the object’s subject field.
  subject: ReferenceInput

  # Checks for equality with the object’s content field.
  content: ReferenceInput

  # Checks for equality with the object’s effectivedatetime field.
  effectivedatetime: String

  # Checks for equality with the object’s effectiveperiod field.
  effectiveperiod: PeriodInput

  # Checks for equality with the object’s issued field.
  issued: String

  # Checks for equality with the object’s performer field.
  performer: [ReferenceInput]

  # Checks for equality with the object’s valuequantity field.
  valuequantity: QuantityInput

  # Checks for equality with the object’s valuecodeableconcept field.
  valuecodeableconcept: CodeableconceptInput

  # Checks for equality with the object’s valuetext field.
  valuetext: String

  # Checks for equality with the object’s valueboolean field.
  valueboolean: Boolean

  # Checks for equality with the object’s valuerange field.
  valuerange: String

  # Checks for equality with the object’s valueratio field.
  valueratio: String

  # Checks for equality with the object’s valuesampledata field.
  valuesampledata: String

  # Checks for equality with the object’s valueattachment field.
  valueattachment: AttachmentInput

  # Checks for equality with the object’s valuetime field.
  valuetime: String

  # Checks for equality with the object’s valuedatetime field.
  valuedatetime: String

  # Checks for equality with the object’s valueperiod field.
  valueperiod: PeriodInput

  # Checks for equality with the object’s dataabsentreason field.
  dataabsentreason: CodeableconceptInput

  # Checks for equality with the object’s interpretation field.
  interpretation: CodeableconceptInput

  # Checks for equality with the object’s comment field.
  comment: String

  # Checks for equality with the object’s bodysite field.
  bodysite: CodeableconceptInput

  # Checks for equality with the object’s method field.
  method: CodeableconceptInput

  # Checks for equality with the object’s specimen field.
  specimen: ReferenceInput

  # Checks for equality with the object’s device field.
  device: ReferenceInput

  # Checks for equality with the object’s referencerange field.
  referencerange: [String]

  # Checks for equality with the object’s related field.
  related: [String]

  # Checks for equality with the object’s component field.
  component: [String]

  # Checks for equality with the object’s rowId field.
  rowId: String

  # Checks for equality with the object’s fullurl field.
  fullurl: String

  # Checks for equality with the object’s resourcetype field.
  resourcetype: String

  # Checks for equality with the object’s meta field.
  meta: String
}

input ObservationInput {
  observationId: Int
  identifier: [IdentifierInput]
  basedon: [ReferenceInput]
  status: String
  category: [CodeableconceptInput]
  code: CodeableconceptInput
  subject: ReferenceInput
  content: ReferenceInput
  effectivedatetime: String
  effectiveperiod: PeriodInput
  issued: String
  performer: [ReferenceInput]
  valuequantity: QuantityInput
  valuecodeableconcept: CodeableconceptInput
  valuetext: String
  valueboolean: Boolean
  valuerange: String
  valueratio: String
  valuesampledata: String
  valueattachment: AttachmentInput
  valuetime: String
  valuedatetime: String
  valueperiod: PeriodInput
  dataabsentreason: CodeableconceptInput
  interpretation: CodeableconceptInput
  comment: String
  bodysite: CodeableconceptInput
  method: CodeableconceptInput
  specimen: ReferenceInput
  device: ReferenceInput
  referencerange: [String]
  related: [String]
  component: [String]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# Represents an update to a Observation. Fields that are set will be updated.
input ObservationPatch {
  observationId: Int
  identifier: [IdentifierInput]
  basedon: [ReferenceInput]
  status: String
  category: [CodeableconceptInput]
  code: CodeableconceptInput
  subject: ReferenceInput
  content: ReferenceInput
  effectivedatetime: String
  effectiveperiod: PeriodInput
  issued: String
  performer: [ReferenceInput]
  valuequantity: QuantityInput
  valuecodeableconcept: CodeableconceptInput
  valuetext: String
  valueboolean: Boolean
  valuerange: String
  valueratio: String
  valuesampledata: String
  valueattachment: AttachmentInput
  valuetime: String
  valuedatetime: String
  valueperiod: PeriodInput
  dataabsentreason: CodeableconceptInput
  interpretation: CodeableconceptInput
  comment: String
  bodysite: CodeableconceptInput
  method: CodeableconceptInput
  specimen: ReferenceInput
  device: ReferenceInput
  referencerange: [String]
  related: [String]
  component: [String]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: String
}

# A connection to a list of Observation values.
type ObservationsConnection {
  # Information to aid in pagination.
  pageInfo: PageInfo!

  # The count of *all* Observation you could get from the connection.
  totalCount: Int

  # A list of edges which contains the Observation and cursor to aid in pagination.
  edges: [ObservationsEdge]

  # A list of Observation objects.
  nodes: [Observation!]
}

# A Observation edge in the connection.
type ObservationsEdge {
  # A cursor for use in pagination.
  cursor: Cursor

  # The Observation at the end of the edge.
  node: Observation!
}

# Methods to use when ordering Observation.
enum ObservationsOrderBy {
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  NATURAL
  OBSERVATION_ID_ASC
  OBSERVATION_ID_DESC
  IDENTIFIER_ASC
  IDENTIFIER_DESC
  BASEDON_ASC
  BASEDON_DESC
  STATUS_ASC
  STATUS_DESC
  CATEGORY_ASC
  CATEGORY_DESC
  CODE_ASC
  CODE_DESC
  SUBJECT_ASC
  SUBJECT_DESC
  CONTENT_ASC
  CONTENT_DESC
  EFFECTIVEDATETIME_ASC
  EFFECTIVEDATETIME_DESC
  EFFECTIVEPERIOD_ASC
  EFFECTIVEPERIOD_DESC
  ISSUED_ASC
  ISSUED_DESC
  PERFORMER_ASC
  PERFORMER_DESC
  VALUEQUANTITY_ASC
  VALUEQUANTITY_DESC
  VALUECODEABLECONCEPT_ASC
  VALUECODEABLECONCEPT_DESC
  VALUETEXT_ASC
  VALUETEXT_DESC
  VALUEBOOLEAN_ASC
  VALUEBOOLEAN_DESC
  VALUERANGE_ASC
  VALUERANGE_DESC
  VALUERATIO_ASC
  VALUERATIO_DESC
  VALUESAMPLEDATA_ASC
  VALUESAMPLEDATA_DESC
  VALUEATTACHMENT_ASC
  VALUEATTACHMENT_DESC
  VALUETIME_ASC
  VALUETIME_DESC
  VALUEDATETIME_ASC
  VALUEDATETIME_DESC
  VALUEPERIOD_ASC
  VALUEPERIOD_DESC
  DATAABSENTREASON_ASC
  DATAABSENTREASON_DESC
  INTERPRETATION_ASC
  INTERPRETATION_DESC
  COMMENT_ASC
  COMMENT_DESC
  BODYSITE_ASC
  BODYSITE_DESC
  METHOD_ASC
  METHOD_DESC
  SPECIMEN_ASC
  SPECIMEN_DESC
  DEVICE_ASC
  DEVICE_DESC
  REFERENCERANGE_ASC
  REFERENCERANGE_DESC
  RELATED_ASC
  RELATED_DESC
  COMPONENT_ASC
  COMPONENT_DESC
  ID_ASC
  ID_DESC
  FULLURL_ASC
  FULLURL_DESC
  RESOURCETYPE_ASC
  RESOURCETYPE_DESC
  META_ASC
  META_DESC
}

type Oraldiet {
  type: [Codeableconcept]
  schedule: [Timing]
  nutrient: [Nutrient]
  texture: [Texture]
  fluidconsistencytype: [Codeableconcept]
  instruction: String
}

input OraldietInput {
  type: [CodeableconceptInput]
  schedule: [TimingInput]
  nutrient: [NutrientInput]
  texture: [TextureInput]
  fluidconsistencytype: [CodeableconceptInput]
  instruction: String
}

# Information about pagination in a connection.
type PageInfo {
  # When paginating forwards, are there more items?
  hasNextPage: Boolean!

  # When paginating backwards, are there more items?
  hasPreviousPage: Boolean!

  # When paginating backwards, the cursor to continue.
  startCursor: Cursor

  # When paginating forwards, the cursor to continue.
  endCursor: Cursor
}

type Patient implements Node {
  # A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  id: ID!
  patientId: Int!
  identifier: [Identifier]
  active: Boolean
  name: [Humanname]
  telecom: [Contactpoint]
  gender: String
  birthdate: String
  deceased: String
  address: [Address]
  maritalstatus: Codeableconcept
  multiplebirth: String
  photo: [Attachment]
  contact: String
  animal: String
  communication: String
  generalpractitioner: [Reference]
  managingorganization: Reference
  link: [String]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: Meta
}

# A condition to be used against Patient object types. All fields are tested for equality and combined with a logical ‘and.’
input PatientCondition {
  # Checks for equality with the object’s patientId field.
  patientId: Int

  # Checks for equality with the object’s identifier field.
  identifier: [IdentifierInput]

  # Checks for equality with the object’s active field.
  active: Boolean

  # Checks for equality with the object’s name field.
  name: [HumannameInput]

  # Checks for equality with the object’s telecom field.
  telecom: [ContactpointInput]

  # Checks for equality with the object’s gender field.
  gender: String

  # Checks for equality with the object’s birthdate field.
  birthdate: String

  # Checks for equality with the object’s deceased field.
  deceased: String

  # Checks for equality with the object’s address field.
  address: [AddressInput]

  # Checks for equality with the object’s maritalstatus field.
  maritalstatus: CodeableconceptInput

  # Checks for equality with the object’s multiplebirth field.
  multiplebirth: String

  # Checks for equality with the object’s photo field.
  photo: [AttachmentInput]

  # Checks for equality with the object’s contact field.
  contact: String

  # Checks for equality with the object’s animal field.
  animal: String

  # Checks for equality with the object’s communication field.
  communication: String

  # Checks for equality with the object’s generalpractitioner field.
  generalpractitioner: [ReferenceInput]

  # Checks for equality with the object’s managingorganization field.
  managingorganization: ReferenceInput

  # Checks for equality with the object’s link field.
  link: [String]

  # Checks for equality with the object’s rowId field.
  rowId: String

  # Checks for equality with the object’s fullurl field.
  fullurl: String

  # Checks for equality with the object’s resourcetype field.
  resourcetype: String

  # Checks for equality with the object’s meta field.
  meta: MetaInput
}

input PatientInput {
  patientId: Int
  identifier: [IdentifierInput]
  active: Boolean
  name: [HumannameInput]
  telecom: [ContactpointInput]
  gender: String
  birthdate: String
  deceased: String
  address: [AddressInput]
  maritalstatus: CodeableconceptInput
  multiplebirth: String
  photo: [AttachmentInput]
  contact: String
  animal: String
  communication: String
  generalpractitioner: [ReferenceInput]
  managingorganization: ReferenceInput
  link: [String]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: MetaInput
}

# Represents an update to a Patient. Fields that are set will be updated.
input PatientPatch {
  patientId: Int
  identifier: [IdentifierInput]
  active: Boolean
  name: [HumannameInput]
  telecom: [ContactpointInput]
  gender: String
  birthdate: String
  deceased: String
  address: [AddressInput]
  maritalstatus: CodeableconceptInput
  multiplebirth: String
  photo: [AttachmentInput]
  contact: String
  animal: String
  communication: String
  generalpractitioner: [ReferenceInput]
  managingorganization: ReferenceInput
  link: [String]
  rowId: String
  fullurl: String
  resourcetype: String
  meta: MetaInput
}

# A connection to a list of Patient values.
type PatientsConnection {
  # Information to aid in pagination.
  pageInfo: PageInfo!

  # The count of *all* Patient you could get from the connection.
  totalCount: Int

  # A list of edges which contains the Patient and cursor to aid in pagination.
  edges: [PatientsEdge]

  # A list of Patient objects.
  nodes: [Patient!]
}

# A Patient edge in the connection.
type PatientsEdge {
  # A cursor for use in pagination.
  cursor: Cursor

  # The Patient at the end of the edge.
  node: Patient!
}

# Methods to use when ordering Patient.
enum PatientsOrderBy {
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  NATURAL
  PATIENT_ID_ASC
  PATIENT_ID_DESC
  IDENTIFIER_ASC
  IDENTIFIER_DESC
  ACTIVE_ASC
  ACTIVE_DESC
  NAME_ASC
  NAME_DESC
  TELECOM_ASC
  TELECOM_DESC
  GENDER_ASC
  GENDER_DESC
  BIRTHDATE_ASC
  BIRTHDATE_DESC
  DECEASED_ASC
  DECEASED_DESC
  ADDRESS_ASC
  ADDRESS_DESC
  MARITALSTATUS_ASC
  MARITALSTATUS_DESC
  MULTIPLEBIRTH_ASC
  MULTIPLEBIRTH_DESC
  PHOTO_ASC
  PHOTO_DESC
  CONTACT_ASC
  CONTACT_DESC
  ANIMAL_ASC
  ANIMAL_DESC
  COMMUNICATION_ASC
  COMMUNICATION_DESC
  GENERALPRACTITIONER_ASC
  GENERALPRACTITIONER_DESC
  MANAGINGORGANIZATION_ASC
  MANAGINGORGANIZATION_DESC
  LINK_ASC
  LINK_DESC
  ID_ASC
  ID_DESC
  FULLURL_ASC
  FULLURL_DESC
  RESOURCETYPE_ASC
  RESOURCETYPE_DESC
  META_ASC
  META_DESC
}

type Period {
  start: String
  end: String
}

input PeriodInput {
  start: String
  end: String
}

type Quantity {
  value: Float
  comparator: String
  unit: String
  system: String
  code: String
}

input QuantityInput {
  value: Float
  comparator: String
  unit: String
  system: String
  code: String
}

type Range {
  low: Low
  high: High
}

input RangeInput {
  low: LowInput
  high: HighInput
}

type Ratio {
  numerator: Quantity
  demoninator: Quantity
}

input RatioInput {
  numerator: QuantityInput
  demoninator: QuantityInput
}

type Reaction {
  substance: Codeableconcept
  manifestation: Codeableconcept
  description: String
  onset: String
  severity: String
  exposureroute: Codeableconcept
  note: Annotation
}

input ReactionInput {
  substance: CodeableconceptInput
  manifestation: CodeableconceptInput
  description: String
  onset: String
  severity: String
  exposureroute: CodeableconceptInput
  note: AnnotationInput
}

type Reference {
  reference: String
  identifier: String
  display: String
}

input ReferenceInput {
  reference: String
  identifier: String
  display: String
}

type Repeat {
  boundsduration: Duration
  boundsrange: Period
  boundsperiod: String
  count: Int
  countmax: Int
  duration: Float
  durationmax: Float
  durationunit: String
  fequency: Int
  frequencymax: Int
  period: Float
  periodmax: Float
  periodunit: String
  dayofweek: [String]
  timeofday: [Time]
  when: [String]
  offset: String
}

input RepeatInput {
  boundsduration: DurationInput
  boundsrange: PeriodInput
  boundsperiod: String
  count: Int
  countmax: Int
  duration: Float
  durationmax: Float
  durationunit: String
  fequency: Int
  frequencymax: Int
  period: Float
  periodmax: Float
  periodunit: String
  dayofweek: [String]
  timeofday: [Time]
  when: [String]
  offset: String
}

type Simplequantity {
  value: Float
  unit: String
  system: String
  code: String
}

input SimplequantityInput {
  value: Float
  unit: String
  system: String
  code: String
}

type Supplement {
  type: [Codeableconcept]
  productname: String
  schedule: [Timing]
  quantity: Simplequantity
  instruction: String
}

input SupplementInput {
  type: [CodeableconceptInput]
  productname: String
  schedule: [TimingInput]
  quantity: SimplequantityInput
  instruction: String
}

type Texture {
  modifier: Codeableconcept
  foodtype: Codeableconcept
}

input TextureInput {
  modifier: CodeableconceptInput
  foodtype: CodeableconceptInput
}

# The exact time of day, does not include the date. May or may not have a timezone offset.
scalar Time

type Timing {
  event: String
  repeat: Repeat
  code: String
}

input TimingInput {
  event: String
  repeat: RepeatInput
  code: String
}

# All input for the updateAllergryintoleranceByAllergyIntoleranceId mutation.
input UpdateAllergryintoleranceByAllergyIntoleranceIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  allergyIntoleranceId: Int!

  # An object where the defined keys will be set on the Allergryintolerance identified by our unique key.
  allergryintolerancePatch: AllergryintolerancePatch!
}

# All input for the updateAllergryintolerance mutation.
input UpdateAllergryintoleranceInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Allergryintolerance to be updated.
  id: ID!

  # An object where the defined keys will be set on the Allergryintolerance identified by our globally unique ID.
  allergryintolerancePatch: AllergryintolerancePatch!
}

# The output of our updateAllergryintolerance mutation.
type UpdateAllergryintolerancePayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  allergryintolerance: Allergryintolerance

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the updateEncounterByEncounterId mutation.
input UpdateEncounterByEncounterIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  encounterId: Int!

  # An object where the defined keys will be set on the Encounter identified by our unique key.
  encounterPatch: EncounterPatch!
}

# All input for the updateEncounter mutation.
input UpdateEncounterInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Encounter to be updated.
  id: ID!

  # An object where the defined keys will be set on the Encounter identified by our globally unique ID.
  encounterPatch: EncounterPatch!
}

# The output of our updateEncounter mutation.
type UpdateEncounterPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  encounter: Encounter

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the updateNutritionorderByNutritionOrderId mutation.
input UpdateNutritionorderByNutritionOrderIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  nutritionOrderId: Int!

  # An object where the defined keys will be set on the Nutritionorder identified by our unique key.
  nutritionorderPatch: NutritionorderPatch!
}

# All input for the updateNutritionorder mutation.
input UpdateNutritionorderInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Nutritionorder to be updated.
  id: ID!

  # An object where the defined keys will be set on the Nutritionorder identified by our globally unique ID.
  nutritionorderPatch: NutritionorderPatch!
}

# The output of our updateNutritionorder mutation.
type UpdateNutritionorderPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  nutritionorder: Nutritionorder

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the updateObservationByObservationId mutation.
input UpdateObservationByObservationIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  observationId: Int!

  # An object where the defined keys will be set on the Observation identified by our unique key.
  observationPatch: ObservationPatch!
}

# All input for the updateObservation mutation.
input UpdateObservationInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Observation to be updated.
  id: ID!

  # An object where the defined keys will be set on the Observation identified by our globally unique ID.
  observationPatch: ObservationPatch!
}

# The output of our updateObservation mutation.
type UpdateObservationPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  observation: Observation

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}

# All input for the updatePatientByPatientId mutation.
input UpdatePatientByPatientIdInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String
  patientId: Int!

  # An object where the defined keys will be set on the Patient identified by our unique key.
  patientPatch: PatientPatch!
}

# All input for the updatePatient mutation.
input UpdatePatientInput {
  # An arbitrary string value with no semantic meaning. Will be included in the
  # payload verbatim. May be used to track mutations by the client.
  clientMutationId: String

  # The globally unique ID which will identify a single Patient to be updated.
  id: ID!

  # An object where the defined keys will be set on the Patient identified by our globally unique ID.
  patientPatch: PatientPatch!
}

# The output of our updatePatient mutation.
type UpdatePatientPayload {
  # The exact same clientMutationId that was provided in the mutation input,
  # unchanged and unused. May be used by a client to track mutations.
  clientMutationId: String
  patient: Patient

  # Our root query field type. Allows us to run any query from our mutation payload.
  query: Query
}




# The root query type which gives access points into the data universe.
type Query implements Node {
  # Fetches an object given its globally unique ID.
  node(
    # The globally unique ID.
    id: ID!
  ): Node

  # Reads and enables paginatation through a set of Allergryintolerance.
  allAllergryintolerances(
    # The method to use when ordering Allergryintolerance.
    orderBy: AllergryintolerancesOrderBy = PRIMARY_KEY_ASC

    # Read all values in the set before (above) this cursor.
    before: Cursor

    # Read all values in the set after (below) this cursor.
    after: Cursor

    # Only read the first n values of the set.
    first: Int

    # Only read the last n values of the set.
    last: Int

    # Skip the first n values from our after cursor, an alternative to cursor
    # based pagination. May not be used with last.
    offset: Int

    # A condition to be used in determining which values should be returned by the collection.
    condition: AllergryintoleranceCondition
  ): AllergryintolerancesConnection

  # Reads a single Allergryintolerance using its globally unique ID.
  allergryintolerance(
    # The globally unique ID to be used in selecting a single Allergryintolerance.
    id: ID!
  ): Allergryintolerance
  allergryintoleranceByAllergyIntoleranceId(allergyIntoleranceId: Int!): Allergryintolerance

  # Reads and enables paginatation through a set of Encounter.
  allEncounters(
    # The method to use when ordering Encounter.
    orderBy: EncountersOrderBy = PRIMARY_KEY_ASC

    # Read all values in the set before (above) this cursor.
    before: Cursor

    # Read all values in the set after (below) this cursor.
    after: Cursor

    # Only read the first n values of the set.
    first: Int

    # Only read the last n values of the set.
    last: Int

    # Skip the first n values from our after cursor, an alternative to cursor
    # based pagination. May not be used with last.
    offset: Int

    # A condition to be used in determining which values should be returned by the collection.
    condition: EncounterCondition
  ): EncountersConnection

  # Reads a single Encounter using its globally unique ID.
  encounter(
    # The globally unique ID to be used in selecting a single Encounter.
    id: ID!
  ): Encounter
  encounterByEncounterId(encounterId: Int!): Encounter

  # Reads and enables paginatation through a set of Nutritionorder.
  allNutritionorders(
    # The method to use when ordering Nutritionorder.
    orderBy: NutritionordersOrderBy = PRIMARY_KEY_ASC

    # Read all values in the set before (above) this cursor.
    before: Cursor

    # Read all values in the set after (below) this cursor.
    after: Cursor

    # Only read the first n values of the set.
    first: Int

    # Only read the last n values of the set.
    last: Int

    # Skip the first n values from our after cursor, an alternative to cursor
    # based pagination. May not be used with last.
    offset: Int

    # A condition to be used in determining which values should be returned by the collection.
    condition: NutritionorderCondition
  ): NutritionordersConnection

  # Reads a single Nutritionorder using its globally unique ID.
  nutritionorder(
    # The globally unique ID to be used in selecting a single Nutritionorder.
    id: ID!
  ): Nutritionorder
  nutritionorderByNutritionOrderId(nutritionOrderId: Int!): Nutritionorder

  # Reads and enables paginatation through a set of Observation.
  allObservations(
    # The method to use when ordering Observation.
    orderBy: ObservationsOrderBy = PRIMARY_KEY_ASC

    # Read all values in the set before (above) this cursor.
    before: Cursor

    # Read all values in the set after (below) this cursor.
    after: Cursor

    # Only read the first n values of the set.
    first: Int

    # Only read the last n values of the set.
    last: Int

    # Skip the first n values from our after cursor, an alternative to cursor
    # based pagination. May not be used with last.
    offset: Int

    # A condition to be used in determining which values should be returned by the collection.
    condition: ObservationCondition
  ): ObservationsConnection

  # Reads a single Observation using its globally unique ID.
  observation(
    # The globally unique ID to be used in selecting a single Observation.
    id: ID!
  ): Observation
  observationByObservationId(observationId: Int!): Observation

  # Reads and enables paginatation through a set of Patient.
  allPatients(
    # The method to use when ordering Patient.
    orderBy: PatientsOrderBy = PRIMARY_KEY_ASC

    # Read all values in the set before (above) this cursor.
    before: Cursor

    # Read all values in the set after (below) this cursor.
    after: Cursor

    # Only read the first n values of the set.
    first: Int

    # Only read the last n values of the set.
    last: Int

    # Skip the first n values from our after cursor, an alternative to cursor
    # based pagination. May not be used with last.
    offset: Int

    # A condition to be used in determining which values should be returned by the collection.
    condition: PatientCondition
  ): PatientsConnection

  # Reads a single Patient using its globally unique ID.
  patient(
    # The globally unique ID to be used in selecting a single Patient.
    id: ID!
  ): Patient
  patientByPatientId(patientId: Int!): Patient

  # Exposes the root query type nested one level down. This is helpful for Relay 1
  # which can only query top level fields if they are in a particular form.
  query: Query!

  # The root query type must be a Node to work well with Relay 1 mutations. This just resolves to query.
  id: ID!
}




type Message {
  text: String
}


type Subscription {
  messageCreated: Message
}
type Mutation {
  createUser(username: String): User

  createPatient(gender: String): Patient

  createMessage(text: String): Message
}
`;


//type Query {
//   allPatients: [Patient]
//   patients(lastName: String!): [Patient]
//   patient(id: ID!): Patient
//   messages: [Message]
// }