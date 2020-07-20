# Models

Common typescript models used throughout the teamest microservices.

## Raw

Raw models include the base models used by the scrapers directly befor the teamest application
transform, sort and group them.

`import * as rawTypes from '@teamest/models/raw';`

## Processed

Processed models include models where some transformation, sorting and grouping has been performed.

`import * as processedTypes from '@teamest/models/processed';`

## Messages

Messages include the full message types that are queued to be send between the different
microservices. Typically these include either processed or raw types within them.

`import * as messageTypes from '@teamest/models/messages';`

# Helpers

Helpers include functions to help manipulate the models listed above. Typically this involves
serialisation and deserialisation.

```
  import {
    RawSerialisers,
    ProcessedSerialisers,
    MessageSerialisers,
    SerialiserErrors,
  } from @teamest/helpers;
```
