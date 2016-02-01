/*
 * Copyright 2014-2015 CyberVision, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef KAACLIENTCONTEXT_H
#define KAACLIENTCONTEXT_H

#include "IKaaClientContext.hpp"
#include "kaa/ClientStatus.hpp"


namespace kaa {

class KaaClientContext : public IKaaClientContext
{
public:
    KaaClientContext(KaaClientProperties &properties, ILogger &logger,
                     IExecutorContext &executorContext, IKaaClientStateStoragePtr state = nullptr);

    KaaClientProperties &getProperties();
    ILogger &getLogger();
    IKaaClientStateStoragePtr &getStatus();
    IExecutorContext &getExecutorContext();

private:
    KaaClientProperties        &properties_;
    ILogger                        &logger_;
    IExecutorContext      &executorContext_;
    IKaaClientStateStoragePtr        state_;
};

}


#endif // KAACLIENTCONTEXT_H
