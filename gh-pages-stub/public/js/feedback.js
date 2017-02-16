/*
 * Copyright 2014-2017 CyberVision, Inc.
 * <p/>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(document).ready(function(){
  /* Check cache and show feedback field if necessary*/
  $("#feedbackForm").show(0);

  $("#feedbackSubmit").click(function(){
    /* Check cache and show feedback field if necessary */
    $('#feedbackAsk').hide(500);
    $('#feedbackResult').show(500);
  })
})
